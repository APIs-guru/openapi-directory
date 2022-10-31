package shared

type EnumValue struct {
	Name    *string  `json:"name,omitempty"`
	Number  *int32   `json:"number,omitempty"`
	Options []Option `json:"options,omitempty"`
}
