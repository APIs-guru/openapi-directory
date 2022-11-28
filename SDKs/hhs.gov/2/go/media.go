package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Media struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMedia(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Media {
	return &Media{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetResourcesMediaFeaturedJSON - Get the list of featured content in the syndication system
// Get the list of featured content in the syndication system
func (s *Media) GetResourcesMediaFeaturedJSON(ctx context.Context, request operations.GetResourcesMediaFeaturedJSONRequest) (*operations.GetResourcesMediaFeaturedJSONResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/media/featured.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

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

// GetResourcesMediaIDContent - Get content for MediaItem
// The actual media content (html, image, etc...)
func (s *Media) GetResourcesMediaIDContent(ctx context.Context, request operations.GetResourcesMediaIDContentRequest) (*operations.GetResourcesMediaIDContentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/content", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

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
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetResourcesMediaIDContent200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetResourcesMediaIDEmbedJSON - Get embed code for MediaItem
// Get the javascript or iframe embed code for this item (to embed it on a web page).
func (s *Media) GetResourcesMediaIDEmbedJSON(ctx context.Context, request operations.GetResourcesMediaIDEmbedJSONRequest) (*operations.GetResourcesMediaIDEmbedJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/embed.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

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
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetResourcesMediaIDEmbedJSON200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetResourcesMediaIDJSON - Get MediaItem by ID
// Information about a specific media item
func (s *Media) GetResourcesMediaIDJSON(ctx context.Context, request operations.GetResourcesMediaIDJSONRequest) (*operations.GetResourcesMediaIDJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

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

// GetResourcesMediaIDPreviewJpg - Get Tag by ID
// Get the jpg preview of the content item where applicable.
func (s *Media) GetResourcesMediaIDPreviewJpg(ctx context.Context, request operations.GetResourcesMediaIDPreviewJpgRequest) (*operations.GetResourcesMediaIDPreviewJpgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/preview.jpg", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

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

// GetResourcesMediaIDRelatedMediaFormat - Get related MediaItems by ID
// Get the media related to the current media item.
func (s *Media) GetResourcesMediaIDRelatedMediaFormat(ctx context.Context, request operations.GetResourcesMediaIDRelatedMediaFormatRequest) (*operations.GetResourcesMediaIDRelatedMediaFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/relatedMedia.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

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

// GetResourcesMediaIDSyndicateFormat - Get syndicated content for MediaItem
// Get syndicated content.
func (s *Media) GetResourcesMediaIDSyndicateFormat(ctx context.Context, request operations.GetResourcesMediaIDSyndicateFormatRequest) (*operations.GetResourcesMediaIDSyndicateFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/syndicate.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

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

// GetResourcesMediaIDThumbnailJpg - Get JPG thumbnail for MediaItem
// Get the jpg thumbnail of the content item where applicable.
func (s *Media) GetResourcesMediaIDThumbnailJpg(ctx context.Context, request operations.GetResourcesMediaIDThumbnailJpgRequest) (*operations.GetResourcesMediaIDThumbnailJpgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/thumbnail.jpg", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

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

// GetResourcesMediaIDYoutubeMetaDataJSON - Get Youtube metadata for MediaItem
// Youtube meta-data for a video item.
func (s *Media) GetResourcesMediaIDYoutubeMetaDataJSON(ctx context.Context, request operations.GetResourcesMediaIDYoutubeMetaDataJSONRequest) (*operations.GetResourcesMediaIDYoutubeMetaDataJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/{id}/youtubeMetaData.json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

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

// GetResourcesMediaJSON - Get MediaItems
// Media Items Listings
func (s *Media) GetResourcesMediaJSON(ctx context.Context, request operations.GetResourcesMediaJSONRequest) (*operations.GetResourcesMediaJSONResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/media.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

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

// GetResourcesMediaMostPopularMediaFormat - Get MediaItems by popularity
// Get the media with the highest ratings.
func (s *Media) GetResourcesMediaMostPopularMediaFormat(ctx context.Context, request operations.GetResourcesMediaMostPopularMediaFormatRequest) (*operations.GetResourcesMediaMostPopularMediaFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/resources/media/mostPopularMedia.{format}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

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

// GetResourcesMediaSearchResultsJSON - Get MediaItems by search query
// Full search
func (s *Media) GetResourcesMediaSearchResultsJSON(ctx context.Context, request operations.GetResourcesMediaSearchResultsJSONRequest) (*operations.GetResourcesMediaSearchResultsJSONResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/resources/media/searchResults.json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

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
