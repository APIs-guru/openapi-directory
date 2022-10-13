package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadRemoteSubtitlesPathParams struct {
	ItemID     string `pathParam:"style=simple,explode=false,name=itemId"`
	SubtitleID string `pathParam:"style=simple,explode=false,name=subtitleId"`
}

type DownloadRemoteSubtitlesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DownloadRemoteSubtitlesRequest struct {
	PathParams DownloadRemoteSubtitlesPathParams
	Security   DownloadRemoteSubtitlesSecurity
}

type DownloadRemoteSubtitlesResponse struct {
	ContentType string
	StatusCode  int64
}
