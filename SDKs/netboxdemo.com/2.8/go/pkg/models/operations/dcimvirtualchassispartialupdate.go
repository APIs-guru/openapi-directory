package operations

import (
	"openapi/pkg/models/shared"
)

type DcimVirtualChassisPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimVirtualChassisPartialUpdateRequest struct {
	PathParams DcimVirtualChassisPartialUpdatePathParams
	Request    shared.WritableVirtualChassis `request:"mediaType=application/json"`
}

type DcimVirtualChassisPartialUpdateResponse struct {
	ContentType    string
	StatusCode     int64
	VirtualChassis *shared.VirtualChassis
}
