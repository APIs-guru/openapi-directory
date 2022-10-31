package shared

type LinodeStatsIo struct {
	Io   [][]float64 `json:"io,omitempty"`
	Swap [][]float64 `json:"swap,omitempty"`
}

type LinodeStatsNetv4 struct {
	In         [][]float64 `json:"in,omitempty"`
	Out        [][]float64 `json:"out,omitempty"`
	PrivateIn  [][]float64 `json:"private_in,omitempty"`
	PrivateOut [][]float64 `json:"private_out,omitempty"`
}

type LinodeStatsNetv6 struct {
	In         [][]float64 `json:"in,omitempty"`
	Out        [][]float64 `json:"out,omitempty"`
	PrivateIn  [][]float64 `json:"private_in,omitempty"`
	PrivateOut [][]float64 `json:"private_out,omitempty"`
}

type LinodeStats struct {
	CPU   [][]float64       `json:"cpu,omitempty"`
	Io    *LinodeStatsIo    `json:"io,omitempty"`
	Netv4 *LinodeStatsNetv4 `json:"netv4,omitempty"`
	Netv6 *LinodeStatsNetv6 `json:"netv6,omitempty"`
	Title *string           `json:"title,omitempty"`
}
