package shared

type ListPlatformsResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Platforms     []Platform `json:"platforms"`
}
