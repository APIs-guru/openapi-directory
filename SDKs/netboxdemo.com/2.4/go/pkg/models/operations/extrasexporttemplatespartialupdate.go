package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasExportTemplatesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasExportTemplatesPartialUpdateRequest struct {
	PathParams ExtrasExportTemplatesPartialUpdatePathParams
	Request    shared.ExportTemplateInput `request:"mediaType=application/json"`
}

type ExtrasExportTemplatesPartialUpdateResponse struct {
	ContentType    string
	ExportTemplate *shared.ExportTemplate
	StatusCode     int64
}
