package shared

// NodeBalancerStatsDataTraffic
// Traffic statistics for this NodeBalancer.
type NodeBalancerStatsDataTraffic struct {
	In  []float64 `json:"in,omitempty"`
	Out []float64 `json:"out,omitempty"`
}

// NodeBalancerStatsData
// The data returned about this NodeBalancers.
type NodeBalancerStatsData struct {
	Connections []float64                     `json:"connections,omitempty"`
	Traffic     *NodeBalancerStatsDataTraffic `json:"traffic,omitempty"`
}

// NodeBalancerStats
// Stats for this NodeBalancer.
type NodeBalancerStats struct {
	Data  *NodeBalancerStatsData `json:"data,omitempty"`
	Title *string                `json:"title,omitempty"`
}
