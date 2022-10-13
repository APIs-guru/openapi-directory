package shared

type TextAtom struct {
	Inputs []TextInput `json:"inputs"`
	Key    *string     `json:"key"`
}
