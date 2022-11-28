package shared

// GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions
// Describe CSV and similar semi-structured data formats.
type GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions struct {
	Delimiter            *string `json:"delimiter,omitempty"`
	DisableTypeInference *bool   `json:"disableTypeInference,omitempty"`
	Encoding             *string `json:"encoding,omitempty"`
	HeaderRows           *int32  `json:"headerRows,omitempty"`
}
