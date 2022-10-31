package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsolePortsCreateRequest struct {
	Request shared.WritableConsolePort `request:"mediaType=application/json"`
}

type DcimConsolePortsCreateResponse struct {
	ConsolePort *shared.ConsolePort
	ContentType string
	StatusCode  int64
}
