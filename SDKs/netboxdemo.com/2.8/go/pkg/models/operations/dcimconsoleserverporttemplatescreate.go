package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleServerPortTemplatesCreateRequest struct {
	Request shared.WritableConsoleServerPortTemplate `request:"mediaType=application/json"`
}

type DcimConsoleServerPortTemplatesCreateResponse struct {
	ConsoleServerPortTemplate *shared.ConsoleServerPortTemplate
	ContentType               string
	StatusCode                int64
}
