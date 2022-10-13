package shared

type CompositeTypesListResponse struct {
	CompositeTypes []CompositeType `json:"compositeTypes"`
	NextPageToken  *string         `json:"nextPageToken"`
}
