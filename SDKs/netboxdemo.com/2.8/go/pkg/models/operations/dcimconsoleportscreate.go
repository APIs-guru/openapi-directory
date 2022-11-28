package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsolePortsCreateRequest struct {
	Request shared.WritableConsolePortInput `request:"mediaType=application/json"`
}

type DcimConsolePortsCreateResponse struct {
	ConsolePort *shared.ConsolePort
	ContentType string
	StatusCode  int64
}
