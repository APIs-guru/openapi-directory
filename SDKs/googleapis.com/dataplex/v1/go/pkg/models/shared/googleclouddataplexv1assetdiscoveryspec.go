package shared

// GoogleCloudDataplexV1AssetDiscoverySpec
// Settings to manage the metadata discovery and publishing for an asset.
type GoogleCloudDataplexV1AssetDiscoverySpec struct {
	CsvOptions      *GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions  `json:"csvOptions,omitempty"`
	Enabled         *bool                                               `json:"enabled,omitempty"`
	ExcludePatterns []string                                            `json:"excludePatterns,omitempty"`
	IncludePatterns []string                                            `json:"includePatterns,omitempty"`
	JSONOptions     *GoogleCloudDataplexV1AssetDiscoverySpecJSONOptions `json:"jsonOptions,omitempty"`
	Schedule        *string                                             `json:"schedule,omitempty"`
}
