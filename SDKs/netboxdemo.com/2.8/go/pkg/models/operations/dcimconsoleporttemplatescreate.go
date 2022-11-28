package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsolePortTemplatesCreateRequest struct {
	Request shared.WritableConsolePortTemplateInput `request:"mediaType=application/json"`
}

type DcimConsolePortTemplatesCreateResponse struct {
	ConsolePortTemplate *shared.ConsolePortTemplate
	ContentType         string
	StatusCode          int64
}
