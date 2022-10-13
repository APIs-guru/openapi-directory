package shared

type ServiceOptionsUpdateModel struct {
	ConsumerPadding  *bool  `json:"consumerPadding"`
	DefaultService   *bool  `json:"defaultService"`
	DurationInterval *int32 `json:"durationInterval"`
	DurationMax      *int32 `json:"durationMax"`
	DurationMin      *int32 `json:"durationMin"`
	DurationSelect   *bool  `json:"durationSelect"`
	Padding          *int32 `json:"padding"`
}
