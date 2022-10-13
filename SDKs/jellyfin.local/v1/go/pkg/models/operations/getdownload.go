package operations

import (
	"openapi/pkg/models/shared"
)

type GetDownloadPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetDownloadSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetDownloadRequest struct {
	PathParams GetDownloadPathParams
	Security   GetDownloadSecurity
}

type GetDownloadResponse struct {
	ContentType                             string
	GetDownload200AudioWildcardBinaryString []byte
	GetDownload200VideoWildcardBinaryString []byte
	ProblemDetails                          map[string]interface{}
	StatusCode                              int64
}
