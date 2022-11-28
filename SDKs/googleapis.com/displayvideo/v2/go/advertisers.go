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

type Advertisers struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAdvertisers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Advertisers {
	return &Advertisers{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DisplayvideoAdvertisersAssetsUpload - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
func (s *Advertisers) DisplayvideoAdvertisersAssetsUpload(ctx context.Context, request operations.DisplayvideoAdvertisersAssetsUploadRequest) (*operations.DisplayvideoAdvertisersAssetsUploadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/assets", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersAssetsUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreateAssetResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateAssetResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersAudit - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
func (s *Advertisers) DisplayvideoAdvertisersAudit(ctx context.Context, request operations.DisplayvideoAdvertisersAuditRequest) (*operations.DisplayvideoAdvertisersAuditResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}:audit", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersAuditResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuditAdvertiserResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuditAdvertiserResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCampaignsCreate - Creates a new campaign. Returns the newly created campaign if successful.
func (s *Advertisers) DisplayvideoAdvertisersCampaignsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersCampaignsCreateRequest) (*operations.DisplayvideoAdvertisersCampaignsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/campaigns", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCampaignsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Campaign
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Campaign = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCampaignsDelete - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
func (s *Advertisers) DisplayvideoAdvertisersCampaignsDelete(ctx context.Context, request operations.DisplayvideoAdvertisersCampaignsDeleteRequest) (*operations.DisplayvideoAdvertisersCampaignsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/campaigns/{campaignId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCampaignsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCampaignsGet - Gets a campaign.
func (s *Advertisers) DisplayvideoAdvertisersCampaignsGet(ctx context.Context, request operations.DisplayvideoAdvertisersCampaignsGetRequest) (*operations.DisplayvideoAdvertisersCampaignsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/campaigns/{campaignId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCampaignsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Campaign
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Campaign = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCampaignsList - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
func (s *Advertisers) DisplayvideoAdvertisersCampaignsList(ctx context.Context, request operations.DisplayvideoAdvertisersCampaignsListRequest) (*operations.DisplayvideoAdvertisersCampaignsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/campaigns", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCampaignsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCampaignsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCampaignsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCampaignsListAssignedTargetingOptions - Lists assigned targeting options of a campaign across targeting types.
func (s *Advertisers) DisplayvideoAdvertisersCampaignsListAssignedTargetingOptions(ctx context.Context, request operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest) (*operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/campaigns/{campaignId}:listAssignedTargetingOptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkListCampaignAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkListCampaignAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCampaignsPatch - Updates an existing campaign. Returns the updated campaign if successful.
func (s *Advertisers) DisplayvideoAdvertisersCampaignsPatch(ctx context.Context, request operations.DisplayvideoAdvertisersCampaignsPatchRequest) (*operations.DisplayvideoAdvertisersCampaignsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/campaigns/{campaignId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCampaignsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Campaign
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Campaign = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to a campaign.
func (s *Advertisers) DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet(ctx context.Context, request operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest) (*operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssignedTargetingOption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssignedTargetingOption = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to a campaign for a specified targeting type.
func (s *Advertisers) DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList(ctx context.Context, request operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest) (*operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCampaignAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCampaignAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersChannelsCreate - Creates a new channel. Returns the newly created channel if successful.
func (s *Advertisers) DisplayvideoAdvertisersChannelsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersChannelsCreateRequest) (*operations.DisplayvideoAdvertisersChannelsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/channels", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersChannelsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Channel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Channel = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersChannelsList - Lists channels for a partner or advertiser.
func (s *Advertisers) DisplayvideoAdvertisersChannelsList(ctx context.Context, request operations.DisplayvideoAdvertisersChannelsListRequest) (*operations.DisplayvideoAdvertisersChannelsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/channels", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersChannelsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListChannelsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListChannelsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersChannelsPatch - Updates a channel. Returns the updated channel if successful.
func (s *Advertisers) DisplayvideoAdvertisersChannelsPatch(ctx context.Context, request operations.DisplayvideoAdvertisersChannelsPatchRequest) (*operations.DisplayvideoAdvertisersChannelsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/channels/{channelId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersChannelsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Channel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Channel = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersChannelsSitesBulkEdit - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
func (s *Advertisers) DisplayvideoAdvertisersChannelsSitesBulkEdit(ctx context.Context, request operations.DisplayvideoAdvertisersChannelsSitesBulkEditRequest) (*operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/channels/{channelId}/sites:bulkEdit", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkEditSitesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkEditSitesResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersChannelsSitesDelete - Deletes a site from a channel.
func (s *Advertisers) DisplayvideoAdvertisersChannelsSitesDelete(ctx context.Context, request operations.DisplayvideoAdvertisersChannelsSitesDeleteRequest) (*operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/channels/{channelId}/sites/{urlOrAppId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersChannelsSitesList - Lists sites in a channel.
func (s *Advertisers) DisplayvideoAdvertisersChannelsSitesList(ctx context.Context, request operations.DisplayvideoAdvertisersChannelsSitesListRequest) (*operations.DisplayvideoAdvertisersChannelsSitesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/channels/{channelId}/sites", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersChannelsSitesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListSitesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListSitesResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersChannelsSitesReplace - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
func (s *Advertisers) DisplayvideoAdvertisersChannelsSitesReplace(ctx context.Context, request operations.DisplayvideoAdvertisersChannelsSitesReplaceRequest) (*operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/channels/{channelId}/sites:replace", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReplaceSitesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReplaceSitesResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCreate - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
func (s *Advertisers) DisplayvideoAdvertisersCreate(ctx context.Context, request operations.DisplayvideoAdvertisersCreateRequest) (*operations.DisplayvideoAdvertisersCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/advertisers"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Advertiser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Advertiser = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCreativesCreate - Creates a new creative. Returns the newly created creative if successful.
func (s *Advertisers) DisplayvideoAdvertisersCreativesCreate(ctx context.Context, request operations.DisplayvideoAdvertisersCreativesCreateRequest) (*operations.DisplayvideoAdvertisersCreativesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/creatives", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCreativesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Creative
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Creative = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCreativesDelete - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
func (s *Advertisers) DisplayvideoAdvertisersCreativesDelete(ctx context.Context, request operations.DisplayvideoAdvertisersCreativesDeleteRequest) (*operations.DisplayvideoAdvertisersCreativesDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/creatives/{creativeId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCreativesDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCreativesGet - Gets a creative.
func (s *Advertisers) DisplayvideoAdvertisersCreativesGet(ctx context.Context, request operations.DisplayvideoAdvertisersCreativesGetRequest) (*operations.DisplayvideoAdvertisersCreativesGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/creatives/{creativeId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCreativesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Creative
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Creative = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCreativesList - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
func (s *Advertisers) DisplayvideoAdvertisersCreativesList(ctx context.Context, request operations.DisplayvideoAdvertisersCreativesListRequest) (*operations.DisplayvideoAdvertisersCreativesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/creatives", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCreativesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCreativesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCreativesResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersCreativesPatch - Updates an existing creative. Returns the updated creative if successful.
func (s *Advertisers) DisplayvideoAdvertisersCreativesPatch(ctx context.Context, request operations.DisplayvideoAdvertisersCreativesPatchRequest) (*operations.DisplayvideoAdvertisersCreativesPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/creatives/{creativeId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersCreativesPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Creative
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Creative = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersDelete - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
func (s *Advertisers) DisplayvideoAdvertisersDelete(ctx context.Context, request operations.DisplayvideoAdvertisersDeleteRequest) (*operations.DisplayvideoAdvertisersDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersEditAssignedTargetingOptions - Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
func (s *Advertisers) DisplayvideoAdvertisersEditAssignedTargetingOptions(ctx context.Context, request operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest) (*operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}:editAssignedTargetingOptions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkEditAdvertiserAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkEditAdvertiserAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersGet - Gets an advertiser.
func (s *Advertisers) DisplayvideoAdvertisersGet(ctx context.Context, request operations.DisplayvideoAdvertisersGetRequest) (*operations.DisplayvideoAdvertisersGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Advertiser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Advertiser = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersCreate - Creates a new insertion order. Returns the newly created insertion order if successful.
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersCreate(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersCreateRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.InsertionOrder
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.InsertionOrder = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersDelete - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersDelete(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersDeleteRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersGet - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersGet(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersGetRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.InsertionOrder
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.InsertionOrder = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersList - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersList(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersListRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListInsertionOrdersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListInsertionOrdersResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions - Lists assigned targeting options of an insertion order across targeting types.
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}:listAssignedTargetingOptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkListInsertionOrderAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkListInsertionOrderAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersPatch - Updates an existing insertion order. Returns the updated insertion order if successful.
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersPatch(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersPatchRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.InsertionOrder
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.InsertionOrder = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssignedTargetingOption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssignedTargetingOption = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to an insertion order.
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssignedTargetingOption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssignedTargetingOption = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to an insertion order.
func (s *Advertisers) DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList(ctx context.Context, request operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest) (*operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListInsertionOrderAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListInsertionOrderAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInvoicesList - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
func (s *Advertisers) DisplayvideoAdvertisersInvoicesList(ctx context.Context, request operations.DisplayvideoAdvertisersInvoicesListRequest) (*operations.DisplayvideoAdvertisersInvoicesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/invoices", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInvoicesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListInvoicesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListInvoicesResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersInvoicesLookupInvoiceCurrency - Retrieves the invoice currency used by an advertiser in a given month.
func (s *Advertisers) DisplayvideoAdvertisersInvoicesLookupInvoiceCurrency(ctx context.Context, request operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest) (*operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/invoices:lookupInvoiceCurrency", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LookupInvoiceCurrencyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LookupInvoiceCurrencyResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions - Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
func (s *Advertisers) DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest) (*operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems:bulkEditAssignedTargetingOptions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkEditAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkEditAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions - Lists assigned targeting options for multiple line items across targeting types.
func (s *Advertisers) DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest) (*operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems:bulkListAssignedTargetingOptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkListAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkListAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsBulkUpdate - Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
func (s *Advertisers) DisplayvideoAdvertisersLineItemsBulkUpdate(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsBulkUpdateRequest) (*operations.DisplayvideoAdvertisersLineItemsBulkUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertisersId}/lineItems:bulkUpdate", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsBulkUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkUpdateLineItemsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkUpdateLineItemsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsCreate - Creates a new line item. Returns the newly created line item if successful.
func (s *Advertisers) DisplayvideoAdvertisersLineItemsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsCreateRequest) (*operations.DisplayvideoAdvertisersLineItemsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LineItem
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LineItem = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsDelete - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
func (s *Advertisers) DisplayvideoAdvertisersLineItemsDelete(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsDeleteRequest) (*operations.DisplayvideoAdvertisersLineItemsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems/{lineItemId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsDuplicate - Duplicates a line item. Returns the ID of the created line item if successful.
func (s *Advertisers) DisplayvideoAdvertisersLineItemsDuplicate(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsDuplicateRequest) (*operations.DisplayvideoAdvertisersLineItemsDuplicateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems/{lineItemId}:duplicate", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsDuplicateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DuplicateLineItemResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DuplicateLineItemResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsGenerateDefault - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
func (s *Advertisers) DisplayvideoAdvertisersLineItemsGenerateDefault(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsGenerateDefaultRequest) (*operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems:generateDefault", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LineItem
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LineItem = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsGet - Gets a line item.
func (s *Advertisers) DisplayvideoAdvertisersLineItemsGet(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsGetRequest) (*operations.DisplayvideoAdvertisersLineItemsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems/{lineItemId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LineItem
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LineItem = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsList - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
func (s *Advertisers) DisplayvideoAdvertisersLineItemsList(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsListRequest) (*operations.DisplayvideoAdvertisersLineItemsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListLineItemsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListLineItemsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsPatch - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
func (s *Advertisers) DisplayvideoAdvertisersLineItemsPatch(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsPatchRequest) (*operations.DisplayvideoAdvertisersLineItemsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems/{lineItemId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LineItem
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LineItem = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
func (s *Advertisers) DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest) (*operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssignedTargetingOption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssignedTargetingOption = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
func (s *Advertisers) DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest) (*operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to a line item.
func (s *Advertisers) DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest) (*operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssignedTargetingOption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssignedTargetingOption = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to a line item.
func (s *Advertisers) DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList(ctx context.Context, request operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest) (*operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListLineItemAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListLineItemAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersList - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
func (s *Advertisers) DisplayvideoAdvertisersList(ctx context.Context, request operations.DisplayvideoAdvertisersListRequest) (*operations.DisplayvideoAdvertisersListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/advertisers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListAdvertisersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAdvertisersResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersListAssignedTargetingOptions - Lists assigned targeting options of an advertiser across targeting types.
func (s *Advertisers) DisplayvideoAdvertisersListAssignedTargetingOptions(ctx context.Context, request operations.DisplayvideoAdvertisersListAssignedTargetingOptionsRequest) (*operations.DisplayvideoAdvertisersListAssignedTargetingOptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}:listAssignedTargetingOptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersListAssignedTargetingOptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkListAdvertiserAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkListAdvertiserAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEdit - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
func (s *Advertisers) DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEdit(ctx context.Context, request operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest) (*operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations:bulkEdit", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkEditAssignedLocationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkEditAssignedLocationsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLocationListsAssignedLocationsCreate - Creates an assignment between a location and a location list.
func (s *Advertisers) DisplayvideoAdvertisersLocationListsAssignedLocationsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest) (*operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssignedLocation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssignedLocation = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLocationListsAssignedLocationsDelete - Deletes the assignment between a location and a location list.
func (s *Advertisers) DisplayvideoAdvertisersLocationListsAssignedLocationsDelete(ctx context.Context, request operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest) (*operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{assignedLocationId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLocationListsAssignedLocationsList - Lists locations assigned to a location list.
func (s *Advertisers) DisplayvideoAdvertisersLocationListsAssignedLocationsList(ctx context.Context, request operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest) (*operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListAssignedLocationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAssignedLocationsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLocationListsCreate - Creates a new location list. Returns the newly created location list if successful.
func (s *Advertisers) DisplayvideoAdvertisersLocationListsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersLocationListsCreateRequest) (*operations.DisplayvideoAdvertisersLocationListsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/locationLists", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLocationListsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationList = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLocationListsList - Lists location lists based on a given advertiser id.
func (s *Advertisers) DisplayvideoAdvertisersLocationListsList(ctx context.Context, request operations.DisplayvideoAdvertisersLocationListsListRequest) (*operations.DisplayvideoAdvertisersLocationListsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/locationLists", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLocationListsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListLocationListsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListLocationListsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersLocationListsPatch - Updates a location list. Returns the updated location list if successful.
func (s *Advertisers) DisplayvideoAdvertisersLocationListsPatch(ctx context.Context, request operations.DisplayvideoAdvertisersLocationListsPatchRequest) (*operations.DisplayvideoAdvertisersLocationListsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/locationLists/{locationListId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersLocationListsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationList = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersManualTriggersActivate - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.
func (s *Advertisers) DisplayvideoAdvertisersManualTriggersActivate(ctx context.Context, request operations.DisplayvideoAdvertisersManualTriggersActivateRequest) (*operations.DisplayvideoAdvertisersManualTriggersActivateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/manualTriggers/{triggerId}:activate", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersManualTriggersActivateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManualTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManualTrigger = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersManualTriggersCreate - Creates a new manual trigger. Returns the newly created manual trigger if successful.
func (s *Advertisers) DisplayvideoAdvertisersManualTriggersCreate(ctx context.Context, request operations.DisplayvideoAdvertisersManualTriggersCreateRequest) (*operations.DisplayvideoAdvertisersManualTriggersCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/manualTriggers", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersManualTriggersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManualTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManualTrigger = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersManualTriggersDeactivate - Deactivates a manual trigger.
func (s *Advertisers) DisplayvideoAdvertisersManualTriggersDeactivate(ctx context.Context, request operations.DisplayvideoAdvertisersManualTriggersDeactivateRequest) (*operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/manualTriggers/{triggerId}:deactivate", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManualTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManualTrigger = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersManualTriggersGet - Gets a manual trigger.
func (s *Advertisers) DisplayvideoAdvertisersManualTriggersGet(ctx context.Context, request operations.DisplayvideoAdvertisersManualTriggersGetRequest) (*operations.DisplayvideoAdvertisersManualTriggersGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/manualTriggers/{triggerId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersManualTriggersGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManualTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManualTrigger = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersManualTriggersList - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.
func (s *Advertisers) DisplayvideoAdvertisersManualTriggersList(ctx context.Context, request operations.DisplayvideoAdvertisersManualTriggersListRequest) (*operations.DisplayvideoAdvertisersManualTriggersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/manualTriggers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersManualTriggersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListManualTriggersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListManualTriggersResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersManualTriggersPatch - Updates a manual trigger. Returns the updated manual trigger if successful.
func (s *Advertisers) DisplayvideoAdvertisersManualTriggersPatch(ctx context.Context, request operations.DisplayvideoAdvertisersManualTriggersPatchRequest) (*operations.DisplayvideoAdvertisersManualTriggersPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/manualTriggers/{triggerId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersManualTriggersPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManualTrigger
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManualTrigger = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersNegativeKeywordListsCreate - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
func (s *Advertisers) DisplayvideoAdvertisersNegativeKeywordListsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersNegativeKeywordListsCreateRequest) (*operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/negativeKeywordLists", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NegativeKeywordList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NegativeKeywordList = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersNegativeKeywordListsList - Lists negative keyword lists based on a given advertiser id.
func (s *Advertisers) DisplayvideoAdvertisersNegativeKeywordListsList(ctx context.Context, request operations.DisplayvideoAdvertisersNegativeKeywordListsListRequest) (*operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/negativeKeywordLists", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListNegativeKeywordListsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListNegativeKeywordListsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
func (s *Advertisers) DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit(ctx context.Context, request operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest) (*operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:bulkEdit", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BulkEditNegativeKeywordsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BulkEditNegativeKeywordsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete - Deletes a negative keyword from a negative keyword list.
func (s *Advertisers) DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete(ctx context.Context, request operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest) (*operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords/{keywordValue}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList - Lists negative keywords in a negative keyword list.
func (s *Advertisers) DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList(ctx context.Context, request operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest) (*operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListNegativeKeywordsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListNegativeKeywordsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
func (s *Advertisers) DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace(ctx context.Context, request operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest) (*operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:replace", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReplaceNegativeKeywordsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReplaceNegativeKeywordsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersNegativeKeywordListsPatch - Updates a negative keyword list. Returns the updated negative keyword list if successful.
func (s *Advertisers) DisplayvideoAdvertisersNegativeKeywordListsPatch(ctx context.Context, request operations.DisplayvideoAdvertisersNegativeKeywordListsPatchRequest) (*operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NegativeKeywordList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NegativeKeywordList = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersPatch - Updates an existing advertiser. Returns the updated advertiser if successful.
func (s *Advertisers) DisplayvideoAdvertisersPatch(ctx context.Context, request operations.DisplayvideoAdvertisersPatchRequest) (*operations.DisplayvideoAdvertisersPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Advertiser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Advertiser = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
func (s *Advertisers) DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate(ctx context.Context, request operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest) (*operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssignedTargetingOption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssignedTargetingOption = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from an advertiser.
func (s *Advertisers) DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete(ctx context.Context, request operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest) (*operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to an advertiser.
func (s *Advertisers) DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet(ctx context.Context, request operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest) (*operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssignedTargetingOption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssignedTargetingOption = out
		}
	}

	return res, nil
}

// DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to an advertiser.
func (s *Advertisers) DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList(ctx context.Context, request operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest) (*operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListAdvertiserAssignedTargetingOptionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAdvertiserAssignedTargetingOptionsResponse = out
		}
	}

	return res, nil
}
