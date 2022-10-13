package shared

type ListLabelsRequest struct {
	End   *string `json:"end"`
	Match *string `json:"match"`
	Start *string `json:"start"`
}
