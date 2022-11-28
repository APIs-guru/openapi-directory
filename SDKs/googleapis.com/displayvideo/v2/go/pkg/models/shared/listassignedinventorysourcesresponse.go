package shared

// ListAssignedInventorySourcesResponse
// Response message for AssignedInventorySourceService.ListAssignedInventorySources.
type ListAssignedInventorySourcesResponse struct {
	AssignedInventorySources []AssignedInventorySource `json:"assignedInventorySources,omitempty"`
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
}
