package shared

type BasicSli struct {
	Availability map[string]interface{} `json:"availability"`
	Latency      *LatencyCriteria       `json:"latency"`
	Location     []string               `json:"location"`
	Method       []string               `json:"method"`
	Version      []string               `json:"version"`
}
