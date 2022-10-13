package operations

import (
	"openapi/pkg/models/shared"
)

type DataExporterTemplateQueryParams struct {
	Type *string `queryParam:"style=form,explode=true,name=type"`
}

type DataExporterTemplateSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type DataExporterTemplateRequest struct {
	QueryParams DataExporterTemplateQueryParams
	Security    DataExporterTemplateSecurity
}

type DataExporterTemplateResponse struct {
	ContentType        string
	DataExporterConfig *shared.DataExporterConfig
	StatusCode         int64
}
