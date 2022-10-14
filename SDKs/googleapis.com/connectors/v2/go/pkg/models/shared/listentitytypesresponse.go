package shared

type ListEntityTypesResponse struct {
	NextPageToken        *string      `json:"nextPageToken,omitempty"`
	Types                []EntityType `json:"types,omitempty"`
	UnsupportedTypeNames []string     `json:"unsupportedTypeNames,omitempty"`
}
