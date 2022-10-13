package shared

type DecommissionDescription struct {
	End          string  `json:"end"`
	Material     string  `json:"material"`
	Observations *string `json:"observations"`
	Start        string  `json:"start"`
}
