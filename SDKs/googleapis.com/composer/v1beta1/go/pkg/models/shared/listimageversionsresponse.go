package shared

type ListImageVersionsResponse struct {
	ImageVersions []ImageVersion `json:"imageVersions"`
	NextPageToken *string        `json:"nextPageToken"`
}
