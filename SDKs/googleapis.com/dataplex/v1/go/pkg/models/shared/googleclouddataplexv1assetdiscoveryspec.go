package shared

type GoogleCloudDataplexV1AssetDiscoverySpec struct {
	CsvOptions      *GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions  `json:"csvOptions"`
	Enabled         *bool                                               `json:"enabled"`
	ExcludePatterns []string                                            `json:"excludePatterns"`
	IncludePatterns []string                                            `json:"includePatterns"`
	JSONOptions     *GoogleCloudDataplexV1AssetDiscoverySpecJSONOptions `json:"jsonOptions"`
	Schedule        *string                                             `json:"schedule"`
}
