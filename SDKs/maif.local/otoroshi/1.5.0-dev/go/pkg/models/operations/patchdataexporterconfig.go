package operations

import (
	"openapi/pkg/models/shared"
)

type PatchDataExporterConfigPathParams struct {
	DataExporterConfigID string `pathParam:"style=simple,explode=false,name=dataExporterConfigId"`
}

type PatchDataExporterConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchDataExporterConfigRequest struct {
	PathParams PatchDataExporterConfigPathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   PatchDataExporterConfigSecurity
}

type PatchDataExporterConfigResponse struct {
	ContentType        string
	DataExporterConfig *shared.DataExporterConfig
	StatusCode         int64
}
