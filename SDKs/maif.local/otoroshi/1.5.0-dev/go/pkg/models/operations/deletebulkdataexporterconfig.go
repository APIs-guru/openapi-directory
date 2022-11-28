package operations

import (
	"openapi/pkg/models/shared"
)

type DeletebulkDataExporterConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type DeletebulkDataExporterConfig200ApplicationJSONStatusEnum string

const (
	DeletebulkDataExporterConfig200ApplicationJSONStatusEnumTwoHundred DeletebulkDataExporterConfig200ApplicationJSONStatusEnum = "200"
)

// DeletebulkDataExporterConfig200ApplicationJSON
// The bulk response
type DeletebulkDataExporterConfig200ApplicationJSON struct {
	Deleted *bool                                                     `json:"deleted,omitempty"`
	ID      *bool                                                     `json:"id,omitempty"`
	Status  *DeletebulkDataExporterConfig200ApplicationJSONStatusEnum `json:"status,omitempty"`
}

type DeletebulkDataExporterConfigRequest struct {
	Request  []shared.Patch `request:"mediaType=application/ndjson"`
	Security DeletebulkDataExporterConfigSecurity
}

type DeletebulkDataExporterConfigResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	DeletebulkDataExporterConfig200ApplicationJSONObjects []DeletebulkDataExporterConfig200ApplicationJSON
}
