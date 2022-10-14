package shared

type GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions struct {
	Delimiter            *string `json:"delimiter,omitempty"`
	DisableTypeInference *bool   `json:"disableTypeInference,omitempty"`
	Encoding             *string `json:"encoding,omitempty"`
	HeaderRows           *int32  `json:"headerRows,omitempty"`
}
