package operations

import (
	"openapi/pkg/models/shared"
)

type GetPodcastByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPodcastByIDSortEnum string

const (
	GetPodcastByIDSortEnumRecentFirst GetPodcastByIDSortEnum = "recent_first"
	GetPodcastByIDSortEnumOldestFirst GetPodcastByIDSortEnum = "oldest_first"
)

type GetPodcastByIDQueryParams struct {
	NextEpisodePubDate *int64                  `queryParam:"style=form,explode=true,name=next_episode_pub_date"`
	Sort               *GetPodcastByIDSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetPodcastByIDHeaders struct {
	XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
}

type GetPodcastByIDRequest struct {
	PathParams  GetPodcastByIDPathParams
	QueryParams GetPodcastByIDQueryParams
	Headers     GetPodcastByIDHeaders
}

type GetPodcastByIDResponse struct {
	ContentType string
	Headers     map[string][]string
	PodcastFull *shared.PodcastFull
	StatusCode  int64
}
