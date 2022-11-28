package shared

// ImportProductSetsGcsSource
// The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line.
type ImportProductSetsGcsSource struct {
	CsvFileURI *string `json:"csvFileUri,omitempty"`
}
