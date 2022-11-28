package shared

// StreamingStageLocation
// Identifies the location of a streaming computation stage, for stage-to-stage communication.
type StreamingStageLocation struct {
	StreamID *string `json:"streamId,omitempty"`
}
