package shared



type NodeBalancerStatsDataTraffic struct {
    In []float64 `json:"in,omitempty"`
    Out []float64 `json:"out,omitempty"`
    
}

type NodeBalancerStatsData struct {
    Connections []float64 `json:"connections,omitempty"`
    Traffic *NodeBalancerStatsDataTraffic `json:"traffic,omitempty"`
    
}

type NodeBalancerStats struct {
    Data *NodeBalancerStatsData `json:"data,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

