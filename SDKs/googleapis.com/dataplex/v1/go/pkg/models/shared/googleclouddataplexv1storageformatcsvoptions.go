package shared

type GoogleCloudDataplexV1StorageFormatCsvOptions struct {
	Delimiter  *string `json:"delimiter"`
	Encoding   *string `json:"encoding"`
	HeaderRows *int32  `json:"headerRows"`
	Quote      *string `json:"quote"`
}
