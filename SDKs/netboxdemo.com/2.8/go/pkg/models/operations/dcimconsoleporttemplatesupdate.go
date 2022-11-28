package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsolePortTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimConsolePortTemplatesUpdateRequest struct {
	PathParams DcimConsolePortTemplatesUpdatePathParams
	Request    shared.WritableConsolePortTemplateInput `request:"mediaType=application/json"`
}

type DcimConsolePortTemplatesUpdateResponse struct {
	ConsolePortTemplate *shared.ConsolePortTemplate
	ContentType         string
	StatusCode          int64
}
