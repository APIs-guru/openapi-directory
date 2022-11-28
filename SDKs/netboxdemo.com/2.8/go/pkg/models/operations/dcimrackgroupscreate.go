package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackGroupsCreateRequest struct {
	Request shared.WritableRackGroupInput `request:"mediaType=application/json"`
}

type DcimRackGroupsCreateResponse struct {
	ContentType string
	RackGroup   *shared.RackGroup
	StatusCode  int64
}
