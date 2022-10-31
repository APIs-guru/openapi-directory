package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleServerPortTemplatesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimConsoleServerPortTemplatesPartialUpdateRequest struct {
	PathParams DcimConsoleServerPortTemplatesPartialUpdatePathParams
	Request    shared.WritableConsoleServerPortTemplate `request:"mediaType=application/json"`
}

type DcimConsoleServerPortTemplatesPartialUpdateResponse struct {
	ConsoleServerPortTemplate *shared.ConsoleServerPortTemplate
	ContentType               string
	StatusCode                int64
}
