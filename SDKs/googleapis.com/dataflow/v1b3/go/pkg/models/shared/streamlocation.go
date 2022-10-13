package shared

type StreamLocation struct {
	CustomSourceLocation   *CustomSourceLocation       `json:"customSourceLocation"`
	PubsubLocation         *PubsubLocation             `json:"pubsubLocation"`
	SideInputLocation      *StreamingSideInputLocation `json:"sideInputLocation"`
	StreamingStageLocation *StreamingStageLocation     `json:"streamingStageLocation"`
}
