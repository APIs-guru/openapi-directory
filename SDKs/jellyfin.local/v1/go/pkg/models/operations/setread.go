package operations

import (
	"openapi/pkg/models/shared"
)

type SetReadPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type SetReadSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SetReadRequest struct {
	PathParams SetReadPathParams
	Security   SetReadSecurity
}

type SetReadResponse struct {
	ContentType string
	StatusCode  int64
}
