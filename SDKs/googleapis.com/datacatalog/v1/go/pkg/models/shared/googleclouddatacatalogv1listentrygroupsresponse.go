package shared

type GoogleCloudDatacatalogV1ListEntryGroupsResponse struct {
	EntryGroups   []GoogleCloudDatacatalogV1EntryGroup `json:"entryGroups,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
