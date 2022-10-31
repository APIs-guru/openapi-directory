package shared

type ListJobTemplatesResponse struct {
	JobTemplates  []JobTemplate `json:"jobTemplates,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
