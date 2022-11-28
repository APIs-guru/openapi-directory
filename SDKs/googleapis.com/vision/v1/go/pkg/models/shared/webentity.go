package shared

// WebEntity
// Entity deduced from similar images on the Internet.
type WebEntity struct {
	Description *string  `json:"description,omitempty"`
	EntityID    *string  `json:"entityId,omitempty"`
	Score       *float32 `json:"score,omitempty"`
}
