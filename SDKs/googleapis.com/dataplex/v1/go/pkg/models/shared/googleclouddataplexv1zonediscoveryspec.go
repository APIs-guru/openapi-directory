package shared



type GoogleCloudDataplexV1ZoneDiscoverySpec struct {
    CsvOptions *GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions `json:"csvOptions,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ExcludePatterns []string `json:"excludePatterns,omitempty"`
    IncludePatterns []string `json:"includePatterns,omitempty"`
    JSONOptions *GoogleCloudDataplexV1ZoneDiscoverySpecJSONOptions `json:"jsonOptions,omitempty"`
    Schedule *string `json:"schedule,omitempty"`
    
}

