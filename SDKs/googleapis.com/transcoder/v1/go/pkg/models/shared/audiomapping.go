package shared

// AudioMapping
// The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
type AudioMapping struct {
	AtomKey       *string  `json:"atomKey,omitempty"`
	GainDb        *float64 `json:"gainDb,omitempty"`
	InputChannel  *int32   `json:"inputChannel,omitempty"`
	InputKey      *string  `json:"inputKey,omitempty"`
	InputTrack    *int32   `json:"inputTrack,omitempty"`
	OutputChannel *int32   `json:"outputChannel,omitempty"`
}
