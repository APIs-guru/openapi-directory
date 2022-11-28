package shared

// ListLabelsRequest
// ListLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names.
type ListLabelsRequest struct {
	End   *string `json:"end,omitempty"`
	Match *string `json:"match,omitempty"`
	Start *string `json:"start,omitempty"`
}
