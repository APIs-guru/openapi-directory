package shared

// Bullet
// Describes the bullet of a paragraph.
type Bullet struct {
	ListID       *string    `json:"listId,omitempty"`
	NestingLevel *int32     `json:"nestingLevel,omitempty"`
	TextStyle    *TextStyle `json:"textStyle,omitempty"`
}
