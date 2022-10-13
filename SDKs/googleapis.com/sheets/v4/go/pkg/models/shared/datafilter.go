package shared

type DataFilter struct {
	A1Range                 *string                  `json:"a1Range"`
	DeveloperMetadataLookup *DeveloperMetadataLookup `json:"developerMetadataLookup"`
	GridRange               *GridRange               `json:"gridRange"`
}
