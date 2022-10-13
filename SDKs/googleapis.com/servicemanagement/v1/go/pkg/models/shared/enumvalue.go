package shared

type EnumValue struct {
	Name    *string  `json:"name"`
	Number  *int32   `json:"number"`
	Options []Option `json:"options"`
}
