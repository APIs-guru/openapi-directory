package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDataExporterConfigPathParams struct {
	DataExporterConfigID string `pathParam:"style=simple,explode=false,name=dataExporterConfigId"`
}

type DeleteDataExporterConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteDataExporterConfigRequest struct {
	PathParams DeleteDataExporterConfigPathParams
	Security   DeleteDataExporterConfigSecurity
}

type DeleteDataExporterConfigResponse struct {
	ContentType string
	Deleted     *shared.Deleted
	StatusCode  int64
}
