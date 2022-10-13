package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleServerPortTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimConsoleServerPortTemplatesUpdateRequest struct {
	PathParams DcimConsoleServerPortTemplatesUpdatePathParams
	Request    shared.WritableConsoleServerPortTemplate `request:"mediaType=application/json"`
}

type DcimConsoleServerPortTemplatesUpdateResponse struct {
	ConsoleServerPortTemplate *shared.ConsoleServerPortTemplate
	ContentType               string
	StatusCode                int64
}
