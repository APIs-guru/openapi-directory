package shared

type EventDefinitionListResponse struct {
	Items         []EventDefinition `json:"items"`
	Kind          *string           `json:"kind"`
	NextPageToken *string           `json:"nextPageToken"`
}
