package shared

type ListActionsResponse struct {
	Actions                []Action `json:"actions"`
	NextPageToken          *string  `json:"nextPageToken"`
	UnsupportedActionNames []string `json:"unsupportedActionNames"`
}
