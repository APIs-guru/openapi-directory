package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleServerPortsTracePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimConsoleServerPortsTraceRequest struct {
	PathParams DcimConsoleServerPortsTracePathParams
}

type DcimConsoleServerPortsTraceResponse struct {
	ConsoleServerPort *shared.ConsoleServerPort
	ContentType       string
	StatusCode        int64
}
