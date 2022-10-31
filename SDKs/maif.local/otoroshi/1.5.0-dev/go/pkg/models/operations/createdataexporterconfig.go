package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataExporterConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateDataExporterConfigRequest struct {
	Request  *shared.DataExporterConfig `request:"mediaType=application/json"`
	Security CreateDataExporterConfigSecurity
}

type CreateDataExporterConfigResponse struct {
	ContentType        string
	DataExporterConfig *shared.DataExporterConfig
	StatusCode         int64
}
