package operations

import (
	"openapi/pkg/models/shared"
)

type GetRemoteSubtitlesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetRemoteSubtitlesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetRemoteSubtitlesRequest struct {
	PathParams GetRemoteSubtitlesPathParams
	Security   GetRemoteSubtitlesSecurity
}

type GetRemoteSubtitlesResponse struct {
	ContentType                                   string
	GetRemoteSubtitles200TextWildcardBinaryString []byte
	StatusCode                                    int64
}
