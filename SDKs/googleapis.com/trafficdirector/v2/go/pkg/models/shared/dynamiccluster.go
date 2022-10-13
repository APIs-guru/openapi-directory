package shared

type DynamicCluster struct {
	Cluster     map[string]interface{} `json:"cluster"`
	LastUpdated *string                `json:"lastUpdated"`
	VersionInfo *string                `json:"versionInfo"`
}
