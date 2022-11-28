package shared

// LinodeStatsIo
// Input/Output statistics.
type LinodeStatsIo struct {
	Io   [][]float64 `json:"io,omitempty"`
	Swap [][]float64 `json:"swap,omitempty"`
}

// LinodeStatsNetv4
// IPv4 statistics.
type LinodeStatsNetv4 struct {
	In         [][]float64 `json:"in,omitempty"`
	Out        [][]float64 `json:"out,omitempty"`
	PrivateIn  [][]float64 `json:"private_in,omitempty"`
	PrivateOut [][]float64 `json:"private_out,omitempty"`
}

// LinodeStatsNetv6
// IPv6 statistics.
type LinodeStatsNetv6 struct {
	In         [][]float64 `json:"in,omitempty"`
	Out        [][]float64 `json:"out,omitempty"`
	PrivateIn  [][]float64 `json:"private_in,omitempty"`
	PrivateOut [][]float64 `json:"private_out,omitempty"`
}

// LinodeStats
// CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.
type LinodeStats struct {
	CPU   [][]float64       `json:"cpu,omitempty"`
	Io    *LinodeStatsIo    `json:"io,omitempty"`
	Netv4 *LinodeStatsNetv4 `json:"netv4,omitempty"`
	Netv6 *LinodeStatsNetv6 `json:"netv6,omitempty"`
	Title *string           `json:"title,omitempty"`
}
