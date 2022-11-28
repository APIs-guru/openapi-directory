package operations

import (
	"openapi/pkg/models/shared"
)

type DcimVirtualChassisCreateRequest struct {
	Request shared.WritableVirtualChassisInput `request:"mediaType=application/json"`
}

type DcimVirtualChassisCreateResponse struct {
	ContentType    string
	StatusCode     int64
	VirtualChassis *shared.VirtualChassis
}
