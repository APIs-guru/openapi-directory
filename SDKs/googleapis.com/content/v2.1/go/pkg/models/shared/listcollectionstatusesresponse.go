package shared

type ListCollectionStatusesResponse struct {
	NextPageToken *string            `json:"nextPageToken"`
	Resources     []CollectionStatus `json:"resources"`
}
