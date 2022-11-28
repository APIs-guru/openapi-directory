package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsolePortsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimConsolePortsPartialUpdateRequest struct {
	PathParams DcimConsolePortsPartialUpdatePathParams
	Request    shared.WritableConsolePortInput `request:"mediaType=application/json"`
}

type DcimConsolePortsPartialUpdateResponse struct {
	ConsolePort *shared.ConsolePort
	ContentType string
	StatusCode  int64
}
