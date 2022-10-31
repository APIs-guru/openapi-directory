package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDevicesReadRequest struct {
	PathParams DcimDevicesReadPathParams
}

type DcimDevicesReadResponse struct {
	ContentType             string
	DeviceWithConfigContext *shared.DeviceWithConfigContext
	StatusCode              int64
}
