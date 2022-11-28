package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasExportTemplatesCreateRequest struct {
	Request shared.WritableExportTemplateInput `request:"mediaType=application/json"`
}

type ExtrasExportTemplatesCreateResponse struct {
	ContentType    string
	ExportTemplate *shared.ExportTemplate
	StatusCode     int64
}
