package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
}

type GetSetupV1CompaniesEmailTemplatesTemplateNameRequest struct {
	PathParams GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams
}

type GetSetupV1CompaniesEmailTemplatesTemplateNameResponse struct {
	ContentResult *shared.ContentResult
	ContentType   string
	StatusCode    int64
}
