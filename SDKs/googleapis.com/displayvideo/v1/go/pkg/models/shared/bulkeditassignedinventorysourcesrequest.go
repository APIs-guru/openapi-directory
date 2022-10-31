package shared

type BulkEditAssignedInventorySourcesRequest struct {
	AdvertiserID                    *string                   `json:"advertiserId,omitempty"`
	CreatedAssignedInventorySources []AssignedInventorySource `json:"createdAssignedInventorySources,omitempty"`
	DeletedAssignedInventorySources []string                  `json:"deletedAssignedInventorySources,omitempty"`
	PartnerID                       *string                   `json:"partnerId,omitempty"`
}
