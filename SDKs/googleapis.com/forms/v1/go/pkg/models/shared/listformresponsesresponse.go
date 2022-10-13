package shared

type ListFormResponsesResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	Responses     []FormResponse `json:"responses"`
}
