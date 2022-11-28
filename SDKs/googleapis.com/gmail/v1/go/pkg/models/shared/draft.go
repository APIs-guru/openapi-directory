package shared

// Draft
// A draft email in the user's mailbox.
type Draft struct {
	ID      *string  `json:"id,omitempty"`
	Message *Message `json:"message,omitempty"`
}
