package operations

import (
	"openapi/pkg/models/shared"
)

type DevicesQueryParams struct {
	Os *string `queryParam:"style=form,explode=true,name=os"`
}

type DevicesSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type DevicesRequest struct {
	QueryParams DevicesQueryParams
	Security    DevicesSecurity
}

type DevicesResponse struct {
	AccessDenied *interface{}
	ContentType  string
	StatusCode   int64
	OsDevices    *interface{}
}
