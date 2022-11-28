package shared

// TextAtom
// The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
type TextAtom struct {
	Inputs []TextInput `json:"inputs,omitempty"`
	Key    *string     `json:"key,omitempty"`
}
