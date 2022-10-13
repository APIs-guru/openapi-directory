package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBulkDataExporterConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateBulkDataExporterConfigRequest struct {
	Request  *shared.DataExporterConfig `request:"mediaType=application/ndjson"`
	Security UpdateBulkDataExporterConfigSecurity
}

type UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum string

const (
	UpdateBulkDataExporterConfig200ApplicationJSONStatusEnumTwoHundred UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum = "200"
)

type UpdateBulkDataExporterConfig200ApplicationJSON struct {
	ID      *bool                                                     `json:"id"`
	Status  *UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum `json:"status"`
	Updated *bool                                                     `json:"updated"`
}

type UpdateBulkDataExporterConfigResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	UpdateBulkDataExporterConfig200ApplicationJSONObjects []UpdateBulkDataExporterConfig200ApplicationJSON
}
