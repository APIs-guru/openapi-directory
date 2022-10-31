package shared

type GoogleSearchIdeahubV1alphaListIdeasResponse struct {
	Ideas         []GoogleSearchIdeahubV1alphaIdea `json:"ideas,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
}
