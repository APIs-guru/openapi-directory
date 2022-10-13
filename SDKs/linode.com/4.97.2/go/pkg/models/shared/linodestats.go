package shared

type LinodeStatsIo struct {
	Io   [][]float64 `json:"io"`
	Swap [][]float64 `json:"swap"`
}

type LinodeStatsNetv4 struct {
	In         [][]float64 `json:"in"`
	Out        [][]float64 `json:"out"`
	PrivateIn  [][]float64 `json:"private_in"`
	PrivateOut [][]float64 `json:"private_out"`
}

type LinodeStatsNetv6 struct {
	In         [][]float64 `json:"in"`
	Out        [][]float64 `json:"out"`
	PrivateIn  [][]float64 `json:"private_in"`
	PrivateOut [][]float64 `json:"private_out"`
}

type LinodeStats struct {
	CPU   [][]float64       `json:"cpu"`
	Io    *LinodeStatsIo    `json:"io"`
	Netv4 *LinodeStatsNetv4 `json:"netv4"`
	Netv6 *LinodeStatsNetv6 `json:"netv6"`
	Title *string           `json:"title"`
}
