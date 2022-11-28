package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Parcels struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewParcels(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Parcels {
	return &Parcels{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetParcelsPidsSiteIDOutputFormat - Get a comma-separated string of all pids for a given site
// Represents all parcel identifiers associated with an individual site
func (s *Parcels) GetParcelsPidsSiteIDOutputFormat(ctx context.Context, request operations.GetParcelsPidsSiteIDOutputFormatRequest) (*operations.GetParcelsPidsSiteIDOutputFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/parcels/pids/{siteID}.{outputFormat}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetParcelsPidsSiteIDOutputFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
