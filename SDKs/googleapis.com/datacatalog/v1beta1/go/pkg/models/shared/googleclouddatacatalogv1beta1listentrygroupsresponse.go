package shared

type GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse struct {
	EntryGroups   []GoogleCloudDatacatalogV1beta1EntryGroup `json:"entryGroups,omitempty"`
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
}
