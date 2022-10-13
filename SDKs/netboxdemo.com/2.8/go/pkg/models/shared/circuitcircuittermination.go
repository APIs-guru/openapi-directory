package shared

type CircuitCircuitTermination struct {
	ConnectedEndpoint NestedInterface `json:"connected_endpoint"`
	ID                *int64          `json:"id"`
	PortSpeed         int64           `json:"port_speed"`
	Site              NestedSite      `json:"site"`
	UpstreamSpeed     *int64          `json:"upstream_speed"`
	URL               *string         `json:"url"`
	XconnectID        *string         `json:"xconnect_id"`
}
