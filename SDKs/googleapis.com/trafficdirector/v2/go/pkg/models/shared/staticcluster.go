package shared

type StaticCluster struct {
	Cluster     map[string]interface{} `json:"cluster"`
	LastUpdated *string                `json:"lastUpdated"`
}
