package operations

import (
	"openapi/pkg/models/shared"
)

type AddUserToSessionPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type AddUserToSessionSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type AddUserToSessionRequest struct {
	PathParams AddUserToSessionPathParams
	Security   AddUserToSessionSecurity
}

type AddUserToSessionResponse struct {
	ContentType string
	StatusCode  int64
}
