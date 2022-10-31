package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileInfosSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetProfileInfosRequest struct {
	Security GetProfileInfosSecurity
}

type GetProfileInfosResponse struct {
	ContentType        string
	DeviceProfileInfos []shared.DeviceProfileInfo
	StatusCode         int64
}
