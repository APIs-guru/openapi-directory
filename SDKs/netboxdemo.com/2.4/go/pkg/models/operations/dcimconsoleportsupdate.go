package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsolePortsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimConsolePortsUpdateRequest struct {
	PathParams DcimConsolePortsUpdatePathParams
	Request    shared.WritableConsolePortInput `request:"mediaType=application/json"`
}

type DcimConsolePortsUpdateResponse struct {
	ConsolePort *shared.ConsolePort
	ContentType string
	StatusCode  int64
}
