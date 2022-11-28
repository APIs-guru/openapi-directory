package shared

// GoogleCloudDataplexV1ZoneDiscoverySpec
// Settings to manage the metadata discovery and publishing in a zone.
type GoogleCloudDataplexV1ZoneDiscoverySpec struct {
	CsvOptions      *GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions  `json:"csvOptions,omitempty"`
	Enabled         *bool                                              `json:"enabled,omitempty"`
	ExcludePatterns []string                                           `json:"excludePatterns,omitempty"`
	IncludePatterns []string                                           `json:"includePatterns,omitempty"`
	JSONOptions     *GoogleCloudDataplexV1ZoneDiscoverySpecJSONOptions `json:"jsonOptions,omitempty"`
	Schedule        *string                                            `json:"schedule,omitempty"`
}
