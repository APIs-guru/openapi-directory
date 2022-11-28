package shared

// TextMapping
// The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
type TextMapping struct {
	AtomKey    *string `json:"atomKey,omitempty"`
	InputKey   *string `json:"inputKey,omitempty"`
	InputTrack *int32  `json:"inputTrack,omitempty"`
}
