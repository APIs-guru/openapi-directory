package shared

type NodeBalancerStatsDataTraffic struct {
	In  []float64 `json:"in"`
	Out []float64 `json:"out"`
}

type NodeBalancerStatsData struct {
	Connections []float64                     `json:"connections"`
	Traffic     *NodeBalancerStatsDataTraffic `json:"traffic"`
}

type NodeBalancerStats struct {
	Data  *NodeBalancerStatsData `json:"data"`
	Title *string                `json:"title"`
}
