package shared

type GoogleCloudDataplexV1ZoneDiscoverySpec struct {
	CsvOptions      *GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions  `json:"csvOptions"`
	Enabled         *bool                                              `json:"enabled"`
	ExcludePatterns []string                                           `json:"excludePatterns"`
	IncludePatterns []string                                           `json:"includePatterns"`
	JSONOptions     *GoogleCloudDataplexV1ZoneDiscoverySpecJSONOptions `json:"jsonOptions"`
	Schedule        *string                                            `json:"schedule"`
}
