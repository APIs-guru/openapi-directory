package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBulkDataExporterConfigsSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum string

const (
	CreateBulkDataExporterConfigs200ApplicationJSONStatusEnumTwoHundredAndOne CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum = "201"
)

// CreateBulkDataExporterConfigs200ApplicationJSON
// The bulk response
type CreateBulkDataExporterConfigs200ApplicationJSON struct {
	Created *bool                                                      `json:"created,omitempty"`
	ID      *bool                                                      `json:"id,omitempty"`
	Status  *CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum `json:"status,omitempty"`
}

type CreateBulkDataExporterConfigsRequest struct {
	Request  *shared.DataExporterConfig `request:"mediaType=application/ndjson"`
	Security CreateBulkDataExporterConfigsSecurity
}

type CreateBulkDataExporterConfigsResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	CreateBulkDataExporterConfigs200ApplicationJSONObjects []CreateBulkDataExporterConfigs200ApplicationJSON
}
