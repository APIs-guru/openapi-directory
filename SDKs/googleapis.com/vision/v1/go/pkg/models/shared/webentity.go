package shared

type WebEntity struct {
	Description *string  `json:"description"`
	EntityID    *string  `json:"entityId"`
	Score       *float32 `json:"score"`
}
