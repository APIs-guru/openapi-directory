package shared

type Error struct {
	Context    *string     `json:"context"`
	Payload    *string     `json:"payload"`
	StackTrace *StackTrace `json:"stackTrace"`
}
