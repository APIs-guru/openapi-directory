package shared

type EditAtom struct {
	EndTimeOffset   *string  `json:"endTimeOffset"`
	Inputs          []string `json:"inputs"`
	Key             *string  `json:"key"`
	StartTimeOffset *string  `json:"startTimeOffset"`
}
