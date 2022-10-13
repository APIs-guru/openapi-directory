package shared

type ListAssignedInventorySourcesResponse struct {
	AssignedInventorySources []AssignedInventorySource `json:"assignedInventorySources"`
	NextPageToken            *string                   `json:"nextPageToken"`
}
