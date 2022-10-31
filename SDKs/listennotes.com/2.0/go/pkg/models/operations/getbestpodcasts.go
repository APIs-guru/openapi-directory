package operations

import (
	"openapi/pkg/models/shared"
)

type GetBestPodcastsQueryParams struct {
	GenreID         *string `queryParam:"style=form,explode=true,name=genre_id"`
	Language        *string `queryParam:"style=form,explode=true,name=language"`
	Page            *int64  `queryParam:"style=form,explode=true,name=page"`
	PublisherRegion *string `queryParam:"style=form,explode=true,name=publisher_region"`
	Region          *string `queryParam:"style=form,explode=true,name=region"`
	SafeMode        *int64  `queryParam:"style=form,explode=true,name=safe_mode"`
}

type GetBestPodcastsHeaders struct {
	XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
}

type GetBestPodcastsRequest struct {
	QueryParams GetBestPodcastsQueryParams
	Headers     GetBestPodcastsHeaders
}

type GetBestPodcastsResponse struct {
	BestPodcastsResponse *shared.BestPodcastsResponse
	ContentType          string
	Headers              map[string][]string
	StatusCode           int64
}
