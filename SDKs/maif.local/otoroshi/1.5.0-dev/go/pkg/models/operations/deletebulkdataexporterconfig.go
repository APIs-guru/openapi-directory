package operations

import (
	"openapi/pkg/models/shared"
)

type DeletebulkDataExporterConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type DeletebulkDataExporterConfigRequest struct {
	Request  []shared.Patch `request:"mediaType=application/ndjson"`
	Security DeletebulkDataExporterConfigSecurity
}

type DeletebulkDataExporterConfig200ApplicationJSONStatusEnum string

const (
	DeletebulkDataExporterConfig200ApplicationJSONStatusEnumTwoHundred DeletebulkDataExporterConfig200ApplicationJSONStatusEnum = "200"
)

type DeletebulkDataExporterConfig200ApplicationJSON struct {
	Deleted *bool                                                     `json:"deleted"`
	ID      *bool                                                     `json:"id"`
	Status  *DeletebulkDataExporterConfig200ApplicationJSONStatusEnum `json:"status"`
}

type DeletebulkDataExporterConfigResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	DeletebulkDataExporterConfig200ApplicationJSONObjects []DeletebulkDataExporterConfig200ApplicationJSON
}
