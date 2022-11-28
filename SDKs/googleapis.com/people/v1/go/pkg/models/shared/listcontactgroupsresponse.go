package shared

// ListContactGroupsResponse
// The response to a list contact groups request.
type ListContactGroupsResponse struct {
	ContactGroups []ContactGroup `json:"contactGroups,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	NextSyncToken *string        `json:"nextSyncToken,omitempty"`
	TotalItems    *int32         `json:"totalItems,omitempty"`
}
