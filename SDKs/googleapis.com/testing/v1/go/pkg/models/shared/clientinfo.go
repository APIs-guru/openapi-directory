package shared

// ClientInfo
// Information about the client which invoked the test.
type ClientInfo struct {
	ClientInfoDetails []ClientInfoDetail `json:"clientInfoDetails,omitempty"`
	Name              *string            `json:"name,omitempty"`
}
