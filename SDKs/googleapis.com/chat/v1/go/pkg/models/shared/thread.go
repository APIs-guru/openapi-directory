package shared

// Thread
// A thread in Google Chat.
type Thread struct {
	Name      *string `json:"name,omitempty"`
	ThreadKey *string `json:"threadKey,omitempty"`
}
