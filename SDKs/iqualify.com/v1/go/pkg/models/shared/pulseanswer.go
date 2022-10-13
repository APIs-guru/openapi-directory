package shared

type PulseAnswer struct {
	MultiChoiceAnswer []PulseMcqOption     `json:"multiChoiceAnswer"`
	SpatialAnswer     []PulseSpatialOption `json:"spatialAnswer"`
	TextAnswer        *string              `json:"textAnswer"`
}
