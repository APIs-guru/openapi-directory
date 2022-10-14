package shared

type ClientStatusRequest struct {
	NodeMatchers []NodeMatcher `json:"nodeMatchers,omitempty"`
}
