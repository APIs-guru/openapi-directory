package shared

type GkeCluster struct {
	Cluster    *string `json:"cluster"`
	InternalIP *bool   `json:"internalIp"`
}
