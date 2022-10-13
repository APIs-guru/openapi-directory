package shared

type ListBuildsResponse struct {
	Builds        []Build `json:"builds"`
	NextPageToken *string `json:"nextPageToken"`
}
