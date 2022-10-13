package shared

type ListReleasesResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Releases      []Release `json:"releases"`
}
