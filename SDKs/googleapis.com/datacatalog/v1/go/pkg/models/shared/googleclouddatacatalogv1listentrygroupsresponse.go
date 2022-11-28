package shared

// GoogleCloudDatacatalogV1ListEntryGroupsResponse
// Response message for ListEntryGroups.
type GoogleCloudDatacatalogV1ListEntryGroupsResponse struct {
	EntryGroups   []GoogleCloudDatacatalogV1EntryGroup `json:"entryGroups,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
