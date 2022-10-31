package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubtitlePathParams struct {
	Index  int32  `pathParam:"style=simple,explode=false,name=index"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type DeleteSubtitleSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteSubtitleRequest struct {
	PathParams DeleteSubtitlePathParams
	Security   DeleteSubtitleSecurity
}

type DeleteSubtitleResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
