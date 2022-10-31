package shared



type Bullet struct {
    ListID *string `json:"listId,omitempty"`
    NestingLevel *int32 `json:"nestingLevel,omitempty"`
    TextStyle *TextStyle `json:"textStyle,omitempty"`
    
}

