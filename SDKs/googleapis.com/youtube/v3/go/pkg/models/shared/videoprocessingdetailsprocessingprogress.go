package shared

// VideoProcessingDetailsProcessingProgress
// Video processing progress and completion time estimate.
type VideoProcessingDetailsProcessingProgress struct {
	PartsProcessed *string `json:"partsProcessed,omitempty"`
	PartsTotal     *string `json:"partsTotal,omitempty"`
	TimeLeftMs     *string `json:"timeLeftMs,omitempty"`
}
