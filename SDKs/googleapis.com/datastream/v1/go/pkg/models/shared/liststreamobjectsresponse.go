package shared

type ListStreamObjectsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	StreamObjects []StreamObject `json:"streamObjects"`
}
