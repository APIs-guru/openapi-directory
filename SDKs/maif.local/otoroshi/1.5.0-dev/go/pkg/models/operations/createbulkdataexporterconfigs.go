package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBulkDataExporterConfigsSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateBulkDataExporterConfigsRequest struct {
	Request  *shared.DataExporterConfig `request:"mediaType=application/ndjson"`
	Security CreateBulkDataExporterConfigsSecurity
}

type CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum string

const (
	CreateBulkDataExporterConfigs200ApplicationJSONStatusEnumTwoHundredAndOne CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum = "201"
)

type CreateBulkDataExporterConfigs200ApplicationJSON struct {
	Created *bool                                                      `json:"created"`
	ID      *bool                                                      `json:"id"`
	Status  *CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum `json:"status"`
}

type CreateBulkDataExporterConfigsResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	CreateBulkDataExporterConfigs200ApplicationJSONObjects []CreateBulkDataExporterConfigs200ApplicationJSON
}
