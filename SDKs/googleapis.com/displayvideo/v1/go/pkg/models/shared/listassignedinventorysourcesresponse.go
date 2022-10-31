package shared

type ListAssignedInventorySourcesResponse struct {
	AssignedInventorySources []AssignedInventorySource `json:"assignedInventorySources,omitempty"`
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
}
