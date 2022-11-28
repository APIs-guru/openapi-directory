package shared

// EditAtom
// Edit atom.
type EditAtom struct {
	EndTimeOffset   *string  `json:"endTimeOffset,omitempty"`
	Inputs          []string `json:"inputs,omitempty"`
	Key             *string  `json:"key,omitempty"`
	StartTimeOffset *string  `json:"startTimeOffset,omitempty"`
}
