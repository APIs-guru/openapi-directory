package shared

type ReportRow struct {
	Metrics     *Metrics     `json:"metrics"`
	ProductView *ProductView `json:"productView"`
	Segments    *Segments    `json:"segments"`
}
