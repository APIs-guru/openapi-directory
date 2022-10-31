package shared



type CircuitCircuitTermination struct {
    ConnectedEndpoint NestedInterface `json:"connected_endpoint"`
    ID *int64 `json:"id,omitempty"`
    PortSpeed int64 `json:"port_speed"`
    Site NestedSite `json:"site"`
    UpstreamSpeed *int64 `json:"upstream_speed,omitempty"`
    URL *string `json:"url,omitempty"`
    XconnectID *string `json:"xconnect_id,omitempty"`
    
}

