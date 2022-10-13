package shared

type GoogleCloudDatacatalogV1ListEntryGroupsResponse struct {
	EntryGroups   []GoogleCloudDatacatalogV1EntryGroup `json:"entryGroups"`
	NextPageToken *string                              `json:"nextPageToken"`
}
