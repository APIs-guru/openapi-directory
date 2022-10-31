package operations

import (
	"openapi/pkg/models/shared"
)

type OnPlaybackProgressPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type OnPlaybackProgressQueryParams struct {
	AudioStreamIndex    *int32                 `queryParam:"style=form,explode=true,name=audioStreamIndex"`
	IsMuted             *bool                  `queryParam:"style=form,explode=true,name=isMuted"`
	IsPaused            *bool                  `queryParam:"style=form,explode=true,name=isPaused"`
	LiveStreamID        *string                `queryParam:"style=form,explode=true,name=liveStreamId"`
	MediaSourceID       *string                `queryParam:"style=form,explode=true,name=mediaSourceId"`
	PlayMethod          *shared.PlayMethodEnum `queryParam:"style=form,explode=true,name=playMethod"`
	PlaySessionID       *string                `queryParam:"style=form,explode=true,name=playSessionId"`
	PositionTicks       *int64                 `queryParam:"style=form,explode=true,name=positionTicks"`
	RepeatMode          *shared.RepeatModeEnum `queryParam:"style=form,explode=true,name=repeatMode"`
	SubtitleStreamIndex *int32                 `queryParam:"style=form,explode=true,name=subtitleStreamIndex"`
	VolumeLevel         *int32                 `queryParam:"style=form,explode=true,name=volumeLevel"`
}

type OnPlaybackProgressSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type OnPlaybackProgressRequest struct {
	PathParams  OnPlaybackProgressPathParams
	QueryParams OnPlaybackProgressQueryParams
	Security    OnPlaybackProgressSecurity
}

type OnPlaybackProgressResponse struct {
	ContentType string
	StatusCode  int64
}
