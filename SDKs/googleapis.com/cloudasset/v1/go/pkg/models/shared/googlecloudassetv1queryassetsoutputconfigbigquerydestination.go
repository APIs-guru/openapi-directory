package shared

// GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination
// BigQuery destination.
type GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination struct {
	Dataset          *string `json:"dataset,omitempty"`
	Table            *string `json:"table,omitempty"`
	WriteDisposition *string `json:"writeDisposition,omitempty"`
}
