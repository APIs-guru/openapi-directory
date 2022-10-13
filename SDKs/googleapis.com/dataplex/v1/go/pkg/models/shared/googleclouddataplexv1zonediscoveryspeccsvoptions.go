package shared

type GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions struct {
	Delimiter            *string `json:"delimiter"`
	DisableTypeInference *bool   `json:"disableTypeInference"`
	Encoding             *string `json:"encoding"`
	HeaderRows           *int32  `json:"headerRows"`
}
