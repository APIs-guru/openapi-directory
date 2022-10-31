package shared

type QuerySeriesRequest struct {
	End   *string `json:"end,omitempty"`
	Start *string `json:"start,omitempty"`
}
