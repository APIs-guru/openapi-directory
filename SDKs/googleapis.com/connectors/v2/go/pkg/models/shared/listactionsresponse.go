package shared

type ListActionsResponse struct {
	Actions                []Action `json:"actions,omitempty"`
	NextPageToken          *string  `json:"nextPageToken,omitempty"`
	UnsupportedActionNames []string `json:"unsupportedActionNames,omitempty"`
}
