package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesNapalmPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDevicesNapalmQueryParams struct {
	Method string `queryParam:"style=form,explode=true,name=method"`
}

type DcimDevicesNapalmRequest struct {
	PathParams  DcimDevicesNapalmPathParams
	QueryParams DcimDevicesNapalmQueryParams
}

type DcimDevicesNapalmResponse struct {
	ContentType  string
	DeviceNapalm *shared.DeviceNapalm
	StatusCode   int64
}
