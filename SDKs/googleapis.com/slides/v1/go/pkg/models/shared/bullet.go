package shared

type Bullet struct {
	BulletStyle  *TextStyle `json:"bulletStyle"`
	Glyph        *string    `json:"glyph"`
	ListID       *string    `json:"listId"`
	NestingLevel *int32     `json:"nestingLevel"`
}
