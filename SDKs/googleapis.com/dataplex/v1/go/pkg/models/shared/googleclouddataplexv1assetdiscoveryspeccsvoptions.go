package shared

// GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions
// Describe CSV and similar semi-structured data formats.
type GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions struct {
	Delimiter            *string `json:"delimiter,omitempty"`
	DisableTypeInference *bool   `json:"disableTypeInference,omitempty"`
	Encoding             *string `json:"encoding,omitempty"`
	HeaderRows           *int32  `json:"headerRows,omitempty"`
}
