package shared

// QueryAssetsOutputConfig
// Output configuration query assets.
type QueryAssetsOutputConfig struct {
	BigqueryDestination *GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination `json:"bigqueryDestination,omitempty"`
}
