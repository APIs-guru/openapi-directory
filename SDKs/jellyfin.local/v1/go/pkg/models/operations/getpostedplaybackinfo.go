package operations

import (
	"openapi/pkg/models/shared"
)

type GetPostedPlaybackInfoPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetPostedPlaybackInfoQueryParams struct {
	AllowAudioStreamCopy *bool   `queryParam:"style=form,explode=true,name=allowAudioStreamCopy"`
	AllowVideoStreamCopy *bool   `queryParam:"style=form,explode=true,name=allowVideoStreamCopy"`
	AudioStreamIndex     *int32  `queryParam:"style=form,explode=true,name=audioStreamIndex"`
	AutoOpenLiveStream   *bool   `queryParam:"style=form,explode=true,name=autoOpenLiveStream"`
	EnableDirectPlay     *bool   `queryParam:"style=form,explode=true,name=enableDirectPlay"`
	EnableDirectStream   *bool   `queryParam:"style=form,explode=true,name=enableDirectStream"`
	EnableTranscoding    *bool   `queryParam:"style=form,explode=true,name=enableTranscoding"`
	LiveStreamID         *string `queryParam:"style=form,explode=true,name=liveStreamId"`
	MaxAudioChannels     *int32  `queryParam:"style=form,explode=true,name=maxAudioChannels"`
	MaxStreamingBitrate  *int32  `queryParam:"style=form,explode=true,name=maxStreamingBitrate"`
	MediaSourceID        *string `queryParam:"style=form,explode=true,name=mediaSourceId"`
	StartTimeTicks       *int64  `queryParam:"style=form,explode=true,name=startTimeTicks"`
	SubtitleStreamIndex  *int32  `queryParam:"style=form,explode=true,name=subtitleStreamIndex"`
	UserID               *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetPostedPlaybackInfoRequests struct {
	PlaybackInfoDto  *shared.PlaybackInfoDto `request:"mediaType=application/*+json"`
	PlaybackInfoDto1 *shared.PlaybackInfoDto `request:"mediaType=application/json"`
	PlaybackInfoDto2 *shared.PlaybackInfoDto `request:"mediaType=text/json"`
}

type GetPostedPlaybackInfoSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetPostedPlaybackInfoRequest struct {
	PathParams  GetPostedPlaybackInfoPathParams
	QueryParams GetPostedPlaybackInfoQueryParams
	Request     *GetPostedPlaybackInfoRequests
	Security    GetPostedPlaybackInfoSecurity
}

type GetPostedPlaybackInfoResponse struct {
	ContentType          string
	PlaybackInfoResponse *shared.PlaybackInfoResponse
	StatusCode           int64
}
