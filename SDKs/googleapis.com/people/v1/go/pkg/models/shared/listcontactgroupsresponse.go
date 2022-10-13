package shared

type ListContactGroupsResponse struct {
	ContactGroups []ContactGroup `json:"contactGroups"`
	NextPageToken *string        `json:"nextPageToken"`
	NextSyncToken *string        `json:"nextSyncToken"`
	TotalItems    *int32         `json:"totalItems"`
}
