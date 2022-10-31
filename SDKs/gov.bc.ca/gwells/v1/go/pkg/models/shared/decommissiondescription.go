package shared

type DecommissionDescription struct {
	End          string  `json:"end"`
	Material     string  `json:"material"`
	Observations *string `json:"observations,omitempty"`
	Start        string  `json:"start"`
}
