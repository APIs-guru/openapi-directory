package shared

type ListFormResponsesResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Responses     []FormResponse `json:"responses,omitempty"`
}
