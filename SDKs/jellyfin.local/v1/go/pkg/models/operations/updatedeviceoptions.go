package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDeviceOptionsQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type UpdateDeviceOptionsRequests struct {
	DeviceOptions  *shared.DeviceOptions `request:"mediaType=application/*+json"`
	DeviceOptions1 *shared.DeviceOptions `request:"mediaType=application/json"`
	DeviceOptions2 *shared.DeviceOptions `request:"mediaType=text/json"`
}

type UpdateDeviceOptionsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateDeviceOptionsRequest struct {
	QueryParams UpdateDeviceOptionsQueryParams
	Request     UpdateDeviceOptionsRequests
	Security    UpdateDeviceOptionsSecurity
}

type UpdateDeviceOptionsResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
