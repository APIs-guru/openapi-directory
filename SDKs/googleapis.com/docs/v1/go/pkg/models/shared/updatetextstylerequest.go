package shared

type UpdateTextStyleRequest struct {
	Fields    *string    `json:"fields"`
	Range     *Range     `json:"range"`
	TextStyle *TextStyle `json:"textStyle"`
}
