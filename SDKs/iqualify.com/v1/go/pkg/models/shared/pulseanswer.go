package shared



type PulseAnswer struct {
    MultiChoiceAnswer []PulseMcqOption `json:"multiChoiceAnswer,omitempty"`
    SpatialAnswer []PulseSpatialOption `json:"spatialAnswer,omitempty"`
    TextAnswer *string `json:"textAnswer,omitempty"`
    
}

