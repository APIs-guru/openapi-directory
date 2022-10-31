package shared



type BasicSli struct {
    Availability map[string]interface{} `json:"availability,omitempty"`
    Latency *LatencyCriteria `json:"latency,omitempty"`
    Location []string `json:"location,omitempty"`
    Method []string `json:"method,omitempty"`
    Version []string `json:"version,omitempty"`
    
}

