package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRacksCreateRequest struct {
	Request shared.WritableRackInput `request:"mediaType=application/json"`
}

type DcimRacksCreateResponse struct {
	ContentType string
	Rack        *shared.Rack
	StatusCode  int64
}
