package operations

import (
	"openapi/pkg/models/shared"
)

type PingPlaybackSessionQueryParams struct {
	PlaySessionID *string `queryParam:"style=form,explode=true,name=playSessionId"`
}

type PingPlaybackSessionSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type PingPlaybackSessionRequest struct {
	QueryParams PingPlaybackSessionQueryParams
	Security    PingPlaybackSessionSecurity
}

type PingPlaybackSessionResponse struct {
	ContentType string
	StatusCode  int64
}
