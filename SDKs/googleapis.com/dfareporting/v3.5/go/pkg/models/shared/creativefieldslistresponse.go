package shared

type CreativeFieldsListResponse struct {
	CreativeFields []CreativeField `json:"creativeFields,omitempty"`
	Kind           *string         `json:"kind,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
