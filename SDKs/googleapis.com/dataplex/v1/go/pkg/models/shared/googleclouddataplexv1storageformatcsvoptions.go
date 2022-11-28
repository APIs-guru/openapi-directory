package shared

// GoogleCloudDataplexV1StorageFormatCsvOptions
// Describes CSV and similar semi-structured data formats.
type GoogleCloudDataplexV1StorageFormatCsvOptions struct {
	Delimiter  *string `json:"delimiter,omitempty"`
	Encoding   *string `json:"encoding,omitempty"`
	HeaderRows *int32  `json:"headerRows,omitempty"`
	Quote      *string `json:"quote,omitempty"`
}
