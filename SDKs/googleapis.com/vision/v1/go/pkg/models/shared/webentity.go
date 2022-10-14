package shared

type WebEntity struct {
	Description *string  `json:"description,omitempty"`
	EntityID    *string  `json:"entityId,omitempty"`
	Score       *float32 `json:"score,omitempty"`
}
