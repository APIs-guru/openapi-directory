package shared

type GoogleSearchIdeahubV1alphaListIdeasResponse struct {
	Ideas         []GoogleSearchIdeahubV1alphaIdea `json:"ideas"`
	NextPageToken *string                          `json:"nextPageToken"`
}
