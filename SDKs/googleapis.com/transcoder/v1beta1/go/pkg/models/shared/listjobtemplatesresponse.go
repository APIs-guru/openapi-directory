package shared

type ListJobTemplatesResponse struct {
	JobTemplates  []JobTemplate `json:"jobTemplates"`
	NextPageToken *string       `json:"nextPageToken"`
}
