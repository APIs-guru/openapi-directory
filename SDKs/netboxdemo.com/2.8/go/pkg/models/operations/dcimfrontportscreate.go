package operations

import (
	"openapi/pkg/models/shared"
)

type DcimFrontPortsCreateRequest struct {
	Request shared.WritableFrontPortInput `request:"mediaType=application/json"`
}

type DcimFrontPortsCreateResponse struct {
	ContentType string
	FrontPort   *shared.FrontPort
	StatusCode  int64
}
