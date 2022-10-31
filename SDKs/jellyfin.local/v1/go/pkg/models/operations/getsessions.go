package operations

import (
	"openapi/pkg/models/shared"
)

type GetSessionsQueryParams struct {
	ActiveWithinSeconds  *int32  `queryParam:"style=form,explode=true,name=activeWithinSeconds"`
	ControllableByUserID *string `queryParam:"style=form,explode=true,name=controllableByUserId"`
	DeviceID             *string `queryParam:"style=form,explode=true,name=deviceId"`
}

type GetSessionsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetSessionsRequest struct {
	QueryParams GetSessionsQueryParams
	Security    GetSessionsSecurity
}

type GetSessionsResponse struct {
	ContentType  string
	SessionInfos []shared.SessionInfo
	StatusCode   int64
}
