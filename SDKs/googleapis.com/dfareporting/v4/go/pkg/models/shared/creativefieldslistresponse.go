package shared

type CreativeFieldsListResponse struct {
	CreativeFields []CreativeField `json:"creativeFields"`
	Kind           *string         `json:"kind"`
	NextPageToken  *string         `json:"nextPageToken"`
}
