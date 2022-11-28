package shared

// ListJobTemplatesResponse
// Response message for `TranscoderService.ListJobTemplates`.
type ListJobTemplatesResponse struct {
	JobTemplates  []JobTemplate `json:"jobTemplates,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
