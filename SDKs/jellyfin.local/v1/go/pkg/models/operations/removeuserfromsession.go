package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveUserFromSessionPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type RemoveUserFromSessionSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type RemoveUserFromSessionRequest struct {
	PathParams RemoveUserFromSessionPathParams
	Security   RemoveUserFromSessionSecurity
}

type RemoveUserFromSessionResponse struct {
	ContentType string
	StatusCode  int64
}
