package operations

import (
	"openapi/pkg/models/shared"
)

type GetPodcastRecommendationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPodcastRecommendationsQueryParams struct {
	SafeMode *int64 `queryParam:"style=form,explode=true,name=safe_mode"`
}

type GetPodcastRecommendationsHeaders struct {
	XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
}

type GetPodcastRecommendationsRequest struct {
	PathParams  GetPodcastRecommendationsPathParams
	QueryParams GetPodcastRecommendationsQueryParams
	Headers     GetPodcastRecommendationsHeaders
}

type GetPodcastRecommendationsResponse struct {
	ContentType                       string
	GetPodcastRecommendationsResponse *shared.GetPodcastRecommendationsResponse
	Headers                           map[string][]string
	StatusCode                        int64
}
