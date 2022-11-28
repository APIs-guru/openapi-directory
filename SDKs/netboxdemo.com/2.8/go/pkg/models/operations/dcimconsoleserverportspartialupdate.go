package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleServerPortsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimConsoleServerPortsPartialUpdateRequest struct {
	PathParams DcimConsoleServerPortsPartialUpdatePathParams
	Request    shared.WritableConsoleServerPortInput `request:"mediaType=application/json"`
}

type DcimConsoleServerPortsPartialUpdateResponse struct {
	ConsoleServerPort *shared.ConsoleServerPort
	ContentType       string
	StatusCode        int64
}
