package shared

type DeleteNamedRangeRequest struct {
	Name         *string `json:"name,omitempty"`
	NamedRangeID *string `json:"namedRangeId,omitempty"`
}
