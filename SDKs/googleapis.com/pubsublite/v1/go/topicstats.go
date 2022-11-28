package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type TopicStats struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTopicStats(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TopicStats {
	return &TopicStats{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursor - Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
func (s *TopicStats) PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursor(ctx context.Context, request operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorRequest) (*operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/topicStats/{topic}:computeHeadCursor", request.PathParams)

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

	res := &operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ComputeHeadCursorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ComputeHeadCursorResponse = out
		}
	}

	return res, nil
}

// PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStats - Compute statistics about a range of messages in a given topic and partition.
func (s *TopicStats) PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStats(ctx context.Context, request operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest) (*operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/topicStats/{topic}:computeMessageStats", request.PathParams)

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

	res := &operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ComputeMessageStatsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ComputeMessageStatsResponse = out
		}
	}

	return res, nil
}

// PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursor - Compute the corresponding cursor for a publish or event time in a topic partition.
func (s *TopicStats) PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursor(ctx context.Context, request operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest) (*operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/topicStats/{topic}:computeTimeCursor", request.PathParams)

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

	res := &operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ComputeTimeCursorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ComputeTimeCursorResponse = out
		}
	}

	return res, nil
}
