package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasExportTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasExportTemplatesUpdateRequest struct {
	PathParams ExtrasExportTemplatesUpdatePathParams
	Request    shared.WritableExportTemplateInput `request:"mediaType=application/json"`
}

type ExtrasExportTemplatesUpdateResponse struct {
	ContentType    string
	ExportTemplate *shared.ExportTemplate
	StatusCode     int64
}
