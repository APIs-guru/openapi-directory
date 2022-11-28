package shared

// Profile
// Profile for a Gmail user.
type Profile struct {
	EmailAddress  *string `json:"emailAddress,omitempty"`
	HistoryID     *string `json:"historyId,omitempty"`
	MessagesTotal *int32  `json:"messagesTotal,omitempty"`
	ThreadsTotal  *int32  `json:"threadsTotal,omitempty"`
}
