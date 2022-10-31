package shared

type ReportRow struct {
	Metrics     *Metrics     `json:"metrics,omitempty"`
	ProductView *ProductView `json:"productView,omitempty"`
	Segments    *Segments    `json:"segments,omitempty"`
}
