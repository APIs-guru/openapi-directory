package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasExportTemplatesCreateRequest struct {
	Request shared.WritableExportTemplate `request:"mediaType=application/json"`
}

type ExtrasExportTemplatesCreateResponse struct {
	ContentType    string
	ExportTemplate *shared.ExportTemplate
	StatusCode     int64
}
