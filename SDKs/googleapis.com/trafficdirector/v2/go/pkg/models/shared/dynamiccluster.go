package shared

type DynamicCluster struct {
	Cluster     map[string]interface{} `json:"cluster,omitempty"`
	LastUpdated *string                `json:"lastUpdated,omitempty"`
	VersionInfo *string                `json:"versionInfo,omitempty"`
}
