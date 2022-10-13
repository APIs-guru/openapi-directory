package shared

type GoogleSearchIdeahubV1betaListIdeasResponse struct {
	Ideas         []GoogleSearchIdeahubV1betaIdea `json:"ideas"`
	NextPageToken *string                         `json:"nextPageToken"`
}
