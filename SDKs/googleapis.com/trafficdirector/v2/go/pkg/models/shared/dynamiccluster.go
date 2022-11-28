package shared

// DynamicCluster
// Describes a dynamically loaded cluster via the CDS API.
type DynamicCluster struct {
	Cluster     map[string]interface{} `json:"cluster,omitempty"`
	LastUpdated *string                `json:"lastUpdated,omitempty"`
	VersionInfo *string                `json:"versionInfo,omitempty"`
}
