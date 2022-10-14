package shared

type ListStepsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Steps         []Step  `json:"steps,omitempty"`
}
