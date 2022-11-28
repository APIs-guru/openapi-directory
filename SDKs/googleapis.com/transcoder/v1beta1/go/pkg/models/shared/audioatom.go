package shared

// AudioAtom
// The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
type AudioAtom struct {
	Channels []AudioChannel `json:"channels,omitempty"`
	Key      *string        `json:"key,omitempty"`
}
