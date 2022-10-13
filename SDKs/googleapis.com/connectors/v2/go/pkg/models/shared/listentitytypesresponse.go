package shared

type ListEntityTypesResponse struct {
	NextPageToken        *string      `json:"nextPageToken"`
	Types                []EntityType `json:"types"`
	UnsupportedTypeNames []string     `json:"unsupportedTypeNames"`
}
