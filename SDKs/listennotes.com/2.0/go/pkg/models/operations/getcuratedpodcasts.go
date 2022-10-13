package operations

import (
	"openapi/pkg/models/shared"
)

type GetCuratedPodcastsQueryParams struct {
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
}

type GetCuratedPodcastsHeaders struct {
	XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
}

type GetCuratedPodcastsRequest struct {
	QueryParams GetCuratedPodcastsQueryParams
	Headers     GetCuratedPodcastsHeaders
}

type GetCuratedPodcastsResponse struct {
	ContentType                string
	GetCuratedPodcastsResponse *shared.GetCuratedPodcastsResponse
	Headers                    map[string][]string
	StatusCode                 int64
}
