package shared

type QueryRangeRequest struct {
	End     *string `json:"end"`
	Query   *string `json:"query"`
	Start   *string `json:"start"`
	Step    *string `json:"step"`
	Timeout *string `json:"timeout"`
}
