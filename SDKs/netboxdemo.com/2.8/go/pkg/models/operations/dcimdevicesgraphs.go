package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesGraphsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDevicesGraphsRequest struct {
	PathParams DcimDevicesGraphsPathParams
}

type DcimDevicesGraphsResponse struct {
	ContentType             string
	DeviceWithConfigContext *shared.DeviceWithConfigContext
	StatusCode              int64
}
