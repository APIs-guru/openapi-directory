package shared

type ListBuildTriggersResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	Triggers      []BuildTrigger `json:"triggers"`
}
