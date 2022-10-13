package shared

type Metric struct {
	Histogram   []Bin        `json:"histogram"`
	Percentiles *Percentiles `json:"percentiles"`
}
