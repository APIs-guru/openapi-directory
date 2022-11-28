package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsolePortTemplatesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimConsolePortTemplatesPartialUpdateRequest struct {
	PathParams DcimConsolePortTemplatesPartialUpdatePathParams
	Request    shared.WritableConsolePortTemplateInput `request:"mediaType=application/json"`
}

type DcimConsolePortTemplatesPartialUpdateResponse struct {
	ConsolePortTemplate *shared.ConsolePortTemplate
	ContentType         string
	StatusCode          int64
}
