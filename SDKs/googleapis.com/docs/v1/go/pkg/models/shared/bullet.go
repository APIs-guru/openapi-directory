package shared

type Bullet struct {
	ListID       *string    `json:"listId"`
	NestingLevel *int32     `json:"nestingLevel"`
	TextStyle    *TextStyle `json:"textStyle"`
}
