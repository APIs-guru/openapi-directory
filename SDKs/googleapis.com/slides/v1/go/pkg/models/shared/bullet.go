package shared

type Bullet struct {
	BulletStyle  *TextStyle `json:"bulletStyle,omitempty"`
	Glyph        *string    `json:"glyph,omitempty"`
	ListID       *string    `json:"listId,omitempty"`
	NestingLevel *int32     `json:"nestingLevel,omitempty"`
}
