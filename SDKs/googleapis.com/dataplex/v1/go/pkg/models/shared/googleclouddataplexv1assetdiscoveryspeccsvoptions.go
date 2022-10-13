package shared

type GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions struct {
	Delimiter            *string `json:"delimiter"`
	DisableTypeInference *bool   `json:"disableTypeInference"`
	Encoding             *string `json:"encoding"`
	HeaderRows           *int32  `json:"headerRows"`
}
