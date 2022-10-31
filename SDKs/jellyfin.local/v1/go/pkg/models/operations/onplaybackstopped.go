package operations

import (
	"openapi/pkg/models/shared"
)

type OnPlaybackStoppedPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type OnPlaybackStoppedQueryParams struct {
	LiveStreamID  *string `queryParam:"style=form,explode=true,name=liveStreamId"`
	MediaSourceID *string `queryParam:"style=form,explode=true,name=mediaSourceId"`
	NextMediaType *string `queryParam:"style=form,explode=true,name=nextMediaType"`
	PlaySessionID *string `queryParam:"style=form,explode=true,name=playSessionId"`
	PositionTicks *int64  `queryParam:"style=form,explode=true,name=positionTicks"`
}

type OnPlaybackStoppedSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type OnPlaybackStoppedRequest struct {
	PathParams  OnPlaybackStoppedPathParams
	QueryParams OnPlaybackStoppedQueryParams
	Security    OnPlaybackStoppedSecurity
}

type OnPlaybackStoppedResponse struct {
	ContentType string
	StatusCode  int64
}
