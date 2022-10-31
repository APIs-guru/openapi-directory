package shared

type ServiceOptionsInputModel struct {
	ConsumerPadding  *bool  `json:"consumerPadding,omitempty"`
	DefaultService   *bool  `json:"defaultService,omitempty"`
	DurationInterval *int32 `json:"durationInterval,omitempty"`
	DurationMax      *int32 `json:"durationMax,omitempty"`
	DurationMin      *int32 `json:"durationMin,omitempty"`
	DurationSelect   *bool  `json:"durationSelect,omitempty"`
	Padding          *int32 `json:"padding,omitempty"`
}
