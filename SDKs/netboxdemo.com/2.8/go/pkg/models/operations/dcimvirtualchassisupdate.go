package operations

import (
	"openapi/pkg/models/shared"
)

type DcimVirtualChassisUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimVirtualChassisUpdateRequest struct {
	PathParams DcimVirtualChassisUpdatePathParams
	Request    shared.WritableVirtualChassis `request:"mediaType=application/json"`
}

type DcimVirtualChassisUpdateResponse struct {
	ContentType    string
	StatusCode     int64
	VirtualChassis *shared.VirtualChassis
}
