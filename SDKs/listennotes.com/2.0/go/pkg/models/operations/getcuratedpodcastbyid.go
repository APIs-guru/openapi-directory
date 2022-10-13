package operations

import (
	"openapi/pkg/models/shared"
)

type GetCuratedPodcastByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetCuratedPodcastByIDHeaders struct {
	XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
}

type GetCuratedPodcastByIDRequest struct {
	PathParams GetCuratedPodcastByIDPathParams
	Headers    GetCuratedPodcastByIDHeaders
}

type GetCuratedPodcastByIDResponse struct {
	ContentType     string
	CuratedListFull *shared.CuratedListFull
	Headers         map[string][]string
	StatusCode      int64
}
