package shared

type BulkEditAssignedInventorySourcesRequest struct {
	AdvertiserID                    *string                   `json:"advertiserId"`
	CreatedAssignedInventorySources []AssignedInventorySource `json:"createdAssignedInventorySources"`
	DeletedAssignedInventorySources []string                  `json:"deletedAssignedInventorySources"`
	PartnerID                       *string                   `json:"partnerId"`
}
