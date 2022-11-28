package shared

// ListStepsResponse
// Response message for StepService.List.
type ListStepsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Steps         []Step  `json:"steps,omitempty"`
}
