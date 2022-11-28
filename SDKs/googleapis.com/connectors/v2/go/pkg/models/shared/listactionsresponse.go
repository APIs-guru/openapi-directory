package shared

// ListActionsResponse
// Response message for ActionService.ListActions
type ListActionsResponse struct {
	Actions                []Action `json:"actions,omitempty"`
	NextPageToken          *string  `json:"nextPageToken,omitempty"`
	UnsupportedActionNames []string `json:"unsupportedActionNames,omitempty"`
}
