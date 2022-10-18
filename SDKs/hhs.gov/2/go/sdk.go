package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var Servers = []string{
	"https://hhs.gov/api/v2",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk.serverURL = serverURL
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		defaultClient:  http.DefaultClient,
		securityClient: http.DefaultClient,
	}
	for _, opt := range opts {
		opt(sdk)
	}
	if sdk.serverURL == "" {
		sdk.serverURL = Servers[0]
	}

	return sdk
}

func (s *SDK) GetResourcesCampaignsIDJSON(ctx context.Context, request operations.GetResourcesCampaignsIDJSONRequest) (*operations.GetResourcesCampaignsIDJSONResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/campaigns/{id}.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesCampaignsIDJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CampaignWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CampaignWrapped = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesCampaignsIDMediaJSON(ctx context.Context, request operations.GetResourcesCampaignsIDMediaJSONRequest) (*operations.GetResourcesCampaignsIDMediaJSONResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/campaigns/{id}/media.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesCampaignsIDMediaJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrapped = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesCampaignsIDSyndicateFormat(ctx context.Context, request operations.GetResourcesCampaignsIDSyndicateFormatRequest) (*operations.GetResourcesCampaignsIDSyndicateFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/campaigns/{id}/syndicate.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesCampaignsIDSyndicateFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SyndicateMarshallerWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SyndicateMarshallerWrapped = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesCampaignsJSON(ctx context.Context, request operations.GetResourcesCampaignsJSONRequest) (*operations.GetResourcesCampaignsJSONResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/campaigns.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesCampaignsJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CampaignWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CampaignWrapped = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesJSON(ctx context.Context, request operations.GetResourcesJSONRequest) (*operations.GetResourcesJSONResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesLanguagesIDJSON(ctx context.Context, request operations.GetResourcesLanguagesIDJSONRequest) (*operations.GetResourcesLanguagesIDJSONResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/languages/{id}.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesLanguagesIDJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.LanguageWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LanguageWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesLanguagesJSON(ctx context.Context, request operations.GetResourcesLanguagesJSONRequest) (*operations.GetResourcesLanguagesJSONResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/languages.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesLanguagesJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.LanguageWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LanguageWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaTypesFormat(ctx context.Context, request operations.GetResourcesMediaTypesFormatRequest) (*operations.GetResourcesMediaTypesFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/mediaTypes.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaTypesFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaTypeHolderWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaTypeHolderWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaFeaturedJSON(ctx context.Context, request operations.GetResourcesMediaFeaturedJSONRequest) (*operations.GetResourcesMediaFeaturedJSONResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/media/featured.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaFeaturedJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItem
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItems = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaIDContent(ctx context.Context, request operations.GetResourcesMediaIDContentRequest) (*operations.GetResourcesMediaIDContentResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/content", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaIDContentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetResourcesMediaIDContent200ApplicationJSONString = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaIDEmbedJSON(ctx context.Context, request operations.GetResourcesMediaIDEmbedJSONRequest) (*operations.GetResourcesMediaIDEmbedJSONResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/embed.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaIDEmbedJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetResourcesMediaIDEmbedJSON200ApplicationJSONString = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaIDJSON(ctx context.Context, request operations.GetResourcesMediaIDJSONRequest) (*operations.GetResourcesMediaIDJSONResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaIDJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaIDPreviewJpg(ctx context.Context, request operations.GetResourcesMediaIDPreviewJpgRequest) (*operations.GetResourcesMediaIDPreviewJpgResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/preview.jpg", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaIDPreviewJpgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetResourcesMediaIDPreviewJpg200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaIDRelatedMediaFormat(ctx context.Context, request operations.GetResourcesMediaIDRelatedMediaFormatRequest) (*operations.GetResourcesMediaIDRelatedMediaFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/relatedMedia.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaIDRelatedMediaFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaIDSyndicateFormat(ctx context.Context, request operations.GetResourcesMediaIDSyndicateFormatRequest) (*operations.GetResourcesMediaIDSyndicateFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/syndicate.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaIDSyndicateFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SyndicateMarshallerWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SyndicateMarshallerWrapped = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaIDThumbnailJpg(ctx context.Context, request operations.GetResourcesMediaIDThumbnailJpgRequest) (*operations.GetResourcesMediaIDThumbnailJpgResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/thumbnail.jpg", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaIDThumbnailJpgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetResourcesMediaIDThumbnailJpg200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaIDYoutubeMetaDataJSON(ctx context.Context, request operations.GetResourcesMediaIDYoutubeMetaDataJSONRequest) (*operations.GetResourcesMediaIDYoutubeMetaDataJSONResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/youtubeMetaData.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaIDYoutubeMetaDataJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaJSON(ctx context.Context, request operations.GetResourcesMediaJSONRequest) (*operations.GetResourcesMediaJSONResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/media.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaMostPopularMediaFormat(ctx context.Context, request operations.GetResourcesMediaMostPopularMediaFormatRequest) (*operations.GetResourcesMediaMostPopularMediaFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/mostPopularMedia.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaMostPopularMediaFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesMediaSearchResultsJSON(ctx context.Context, request operations.GetResourcesMediaSearchResultsJSONRequest) (*operations.GetResourcesMediaSearchResultsJSONResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/media/searchResults.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesMediaSearchResultsJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesSourcesIDJSON(ctx context.Context, request operations.GetResourcesSourcesIDJSONRequest) (*operations.GetResourcesSourcesIDJSONResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/sources/{id}.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesSourcesIDJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SourceWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SourceWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesSourcesIDSyndicateFormat(ctx context.Context, request operations.GetResourcesSourcesIDSyndicateFormatRequest) (*operations.GetResourcesSourcesIDSyndicateFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/sources/{id}/syndicate.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesSourcesIDSyndicateFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesSourcesJSON(ctx context.Context, request operations.GetResourcesSourcesJSONRequest) (*operations.GetResourcesSourcesJSONResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/sources.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesSourcesJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SourceWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SourceWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesTagsFormat(ctx context.Context, request operations.GetResourcesTagsFormatRequest) (*operations.GetResourcesTagsFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/tags.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesTagsFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TagMarshallerWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagMarshallerWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesTagsIDFormat(ctx context.Context, request operations.GetResourcesTagsIDFormatRequest) (*operations.GetResourcesTagsIDFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/tags/{id}.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesTagsIDFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TagMarshallerWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagMarshallerWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesTagsIDMediaFormat(ctx context.Context, request operations.GetResourcesTagsIDMediaFormatRequest) (*operations.GetResourcesTagsIDMediaFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/tags/{id}/media.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesTagsIDMediaFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesTagsIDRelatedFormat(ctx context.Context, request operations.GetResourcesTagsIDRelatedFormatRequest) (*operations.GetResourcesTagsIDRelatedFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/tags/{id}/related.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesTagsIDRelatedFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TagMarshallerWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagMarshallerWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesTagsIDSyndicateFormat(ctx context.Context, request operations.GetResourcesTagsIDSyndicateFormatRequest) (*operations.GetResourcesTagsIDSyndicateFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/tags/{id}/syndicate.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesTagsIDSyndicateFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetResourcesTagsIDSyndicateFormat200ApplicationJSONString = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesTagsTagLanguagesFormat(ctx context.Context, request operations.GetResourcesTagsTagLanguagesFormatRequest) (*operations.GetResourcesTagsTagLanguagesFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/tags/tagLanguages.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesTagsTagLanguagesFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TagLanguageMarshallerWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagLanguageMarshallerWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesTagsTagTypesFormat(ctx context.Context, request operations.GetResourcesTagsTagTypesFormatRequest) (*operations.GetResourcesTagsTagTypesFormatResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/tags/tagTypes.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesTagsTagTypesFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TagTypeMarshallerWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagTypeMarshallerWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

func (s *SDK) GetResourcesUserMediaListsIDJSON(ctx context.Context, request operations.GetResourcesUserMediaListsIDJSONRequest) (*operations.GetResourcesUserMediaListsIDJSONResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/userMediaLists/{id}.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetResourcesUserMediaListsIDJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MediaItemWrapped
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MediaItemWrappeds = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
