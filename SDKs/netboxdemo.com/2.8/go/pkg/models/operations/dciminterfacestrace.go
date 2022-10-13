package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfacesTracePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfacesTraceRequest struct {
	PathParams DcimInterfacesTracePathParams
}

type DcimInterfacesTraceResponse struct {
	ContentType     string
	DeviceInterface *shared.DeviceInterface
	StatusCode      int64
}
