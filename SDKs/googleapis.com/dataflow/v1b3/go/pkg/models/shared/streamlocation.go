package shared

type StreamLocation struct {
	CustomSourceLocation   *CustomSourceLocation       `json:"customSourceLocation,omitempty"`
	PubsubLocation         *PubsubLocation             `json:"pubsubLocation,omitempty"`
	SideInputLocation      *StreamingSideInputLocation `json:"sideInputLocation,omitempty"`
	StreamingStageLocation *StreamingStageLocation     `json:"streamingStageLocation,omitempty"`
}
