package shared

// BulkEditAssignedInventorySourcesResponse
// Response message for AssignedInventorySourceService.BulkEdit.
type BulkEditAssignedInventorySourcesResponse struct {
	AssignedInventorySources []AssignedInventorySource `json:"assignedInventorySources,omitempty"`
}
