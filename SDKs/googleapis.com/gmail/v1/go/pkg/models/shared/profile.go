package shared

type Profile struct {
	EmailAddress  *string `json:"emailAddress"`
	HistoryID     *string `json:"historyId"`
	MessagesTotal *int32  `json:"messagesTotal"`
	ThreadsTotal  *int32  `json:"threadsTotal"`
}
