package shared

type GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse struct {
	EntryGroups   []GoogleCloudDatacatalogV1beta1EntryGroup `json:"entryGroups"`
	NextPageToken *string                                   `json:"nextPageToken"`
}
