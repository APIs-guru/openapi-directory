package shared

// GoogleCloudDataplexV1DataProfileResult
// DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.
type GoogleCloudDataplexV1DataProfileResult struct {
	Profile     *GoogleCloudDataplexV1DataProfileResultProfile `json:"profile,omitempty"`
	RowCount    *string                                        `json:"rowCount,omitempty"`
	ScannedData *GoogleCloudDataplexV1ScannedData              `json:"scannedData,omitempty"`
}
