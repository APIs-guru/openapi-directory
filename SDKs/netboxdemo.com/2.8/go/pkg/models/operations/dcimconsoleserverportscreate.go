package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleServerPortsCreateRequest struct {
	Request shared.WritableConsoleServerPort `request:"mediaType=application/json"`
}

type DcimConsoleServerPortsCreateResponse struct {
	ConsoleServerPort *shared.ConsoleServerPort
	ContentType       string
	StatusCode        int64
}
