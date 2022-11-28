package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfacesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfacesPartialUpdateRequest struct {
	PathParams DcimInterfacesPartialUpdatePathParams
	Request    shared.WritableDeviceInterfaceInput `request:"mediaType=application/json"`
}

type DcimInterfacesPartialUpdateResponse struct {
	ContentType     string
	DeviceInterface *shared.DeviceInterface
	StatusCode      int64
}
