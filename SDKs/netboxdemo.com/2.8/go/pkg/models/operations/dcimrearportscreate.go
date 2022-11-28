package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRearPortsCreateRequest struct {
	Request shared.WritableRearPortInput `request:"mediaType=application/json"`
}

type DcimRearPortsCreateResponse struct {
	ContentType string
	RearPort    *shared.RearPort
	StatusCode  int64
}
