package shared

// BulkEditAssignedInventorySourcesRequestInput
// Request message for AssignedInventorySourceService.BulkEdit.
type BulkEditAssignedInventorySourcesRequestInput struct {
	AdvertiserID                    *string                        `json:"advertiserId,omitempty"`
	CreatedAssignedInventorySources []AssignedInventorySourceInput `json:"createdAssignedInventorySources,omitempty"`
	DeletedAssignedInventorySources []string                       `json:"deletedAssignedInventorySources,omitempty"`
	PartnerID                       *string                        `json:"partnerId,omitempty"`
}
