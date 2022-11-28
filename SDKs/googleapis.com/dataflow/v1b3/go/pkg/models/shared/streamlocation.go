package shared

// StreamLocation
// Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.
type StreamLocation struct {
	CustomSourceLocation   *CustomSourceLocation       `json:"customSourceLocation,omitempty"`
	PubsubLocation         *PubsubLocation             `json:"pubsubLocation,omitempty"`
	SideInputLocation      *StreamingSideInputLocation `json:"sideInputLocation,omitempty"`
	StreamingStageLocation *StreamingStageLocation     `json:"streamingStageLocation,omitempty"`
}
