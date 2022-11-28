package shared

// ClientStatusRequest
// Request for client status of clients identified by a list of NodeMatchers.
type ClientStatusRequest struct {
	NodeMatchers []NodeMatcher `json:"nodeMatchers,omitempty"`
}
