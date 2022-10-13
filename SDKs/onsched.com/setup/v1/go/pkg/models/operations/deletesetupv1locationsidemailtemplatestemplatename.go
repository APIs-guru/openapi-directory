package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1LocationsIDEmailTemplatesTemplateNamePathParams struct {
	ID           string `pathParam:"style=simple,explode=false,name=id"`
	TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
}

type DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest struct {
	PathParams DeleteSetupV1LocationsIDEmailTemplatesTemplateNamePathParams
}

type DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse struct {
	ContentResult *shared.ContentResult
	ContentType   string
	StatusCode    int64
}
