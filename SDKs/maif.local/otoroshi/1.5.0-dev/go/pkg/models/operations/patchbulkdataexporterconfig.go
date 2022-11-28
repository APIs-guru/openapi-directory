package operations

import (
	"openapi/pkg/models/shared"
)

type PatchBulkDataExporterConfigSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchBulkDataExporterConfig200ApplicationJSONStatusEnum string

const (
	PatchBulkDataExporterConfig200ApplicationJSONStatusEnumTwoHundred PatchBulkDataExporterConfig200ApplicationJSONStatusEnum = "200"
)

// PatchBulkDataExporterConfig200ApplicationJSON
// The bulk response
type PatchBulkDataExporterConfig200ApplicationJSON struct {
	ID      *bool                                                    `json:"id,omitempty"`
	Status  *PatchBulkDataExporterConfig200ApplicationJSONStatusEnum `json:"status,omitempty"`
	Updated *bool                                                    `json:"updated,omitempty"`
}

type PatchBulkDataExporterConfigRequest struct {
	Request  []shared.Patch `request:"mediaType=application/ndjson"`
	Security PatchBulkDataExporterConfigSecurity
}

type PatchBulkDataExporterConfigResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	PatchBulkDataExporterConfig200ApplicationJSONObjects []PatchBulkDataExporterConfig200ApplicationJSON
}
