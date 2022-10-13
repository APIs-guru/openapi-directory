package shared

type DirectorySitesListResponse struct {
	DirectorySites []DirectorySite `json:"directorySites"`
	Kind           *string         `json:"kind"`
	NextPageToken  *string         `json:"nextPageToken"`
}
