package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDataExporterConfigPathParams struct {
	DataExporterConfigID string `pathParam:"style=simple,explode=false,name=dataExporterConfigId"`
}

type UpdateDataExporterConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateDataExporterConfigRequest struct {
	PathParams UpdateDataExporterConfigPathParams
	Request    *shared.DataExporterConfig `request:"mediaType=application/json"`
	Security   UpdateDataExporterConfigSecurity
}

type UpdateDataExporterConfigResponse struct {
	ContentType        string
	DataExporterConfig *shared.DataExporterConfig
	StatusCode         int64
}
