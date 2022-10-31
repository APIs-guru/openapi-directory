package shared

type ListLabelsRequest struct {
	End   *string `json:"end,omitempty"`
	Match *string `json:"match,omitempty"`
	Start *string `json:"start,omitempty"`
}
