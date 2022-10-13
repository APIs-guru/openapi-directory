package shared

type Draft struct {
	ID      *string  `json:"id"`
	Message *Message `json:"message"`
}
