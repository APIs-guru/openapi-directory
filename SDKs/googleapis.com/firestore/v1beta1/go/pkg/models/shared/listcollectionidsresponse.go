package shared

type ListCollectionIdsResponse struct {
	CollectionIds []string `json:"collectionIds"`
	NextPageToken *string  `json:"nextPageToken"`
}
