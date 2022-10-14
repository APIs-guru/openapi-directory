package shared

type CompositeTypesListResponse struct {
	CompositeTypes []CompositeType `json:"compositeTypes,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
