package shared

// ClientInfoDetail
// Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
type ClientInfoDetail struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
