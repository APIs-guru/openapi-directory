package shared

type ManifestsListResponse struct {
	Manifests     []Manifest `json:"manifests"`
	NextPageToken *string    `json:"nextPageToken"`
}
