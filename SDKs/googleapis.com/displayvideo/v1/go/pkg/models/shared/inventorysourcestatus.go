package shared

type InventorySourceStatusConfigStatusEnum string

const (
	InventorySourceStatusConfigStatusEnumInventorySourceConfigStatusUnspecified InventorySourceStatusConfigStatusEnum = "INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED"
	InventorySourceStatusConfigStatusEnumInventorySourceConfigStatusPending     InventorySourceStatusConfigStatusEnum = "INVENTORY_SOURCE_CONFIG_STATUS_PENDING"
	InventorySourceStatusConfigStatusEnumInventorySourceConfigStatusCompleted   InventorySourceStatusConfigStatusEnum = "INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED"
)

type InventorySourceStatusEntityStatusEnum string

const (
	InventorySourceStatusEntityStatusEnumEntityStatusUnspecified          InventorySourceStatusEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	InventorySourceStatusEntityStatusEnumEntityStatusActive               InventorySourceStatusEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
	InventorySourceStatusEntityStatusEnumEntityStatusArchived             InventorySourceStatusEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
	InventorySourceStatusEntityStatusEnumEntityStatusDraft                InventorySourceStatusEntityStatusEnum = "ENTITY_STATUS_DRAFT"
	InventorySourceStatusEntityStatusEnumEntityStatusPaused               InventorySourceStatusEntityStatusEnum = "ENTITY_STATUS_PAUSED"
	InventorySourceStatusEntityStatusEnumEntityStatusScheduledForDeletion InventorySourceStatusEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

type InventorySourceStatusSellerStatusEnum string

const (
	InventorySourceStatusSellerStatusEnumEntityStatusUnspecified          InventorySourceStatusSellerStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	InventorySourceStatusSellerStatusEnumEntityStatusActive               InventorySourceStatusSellerStatusEnum = "ENTITY_STATUS_ACTIVE"
	InventorySourceStatusSellerStatusEnumEntityStatusArchived             InventorySourceStatusSellerStatusEnum = "ENTITY_STATUS_ARCHIVED"
	InventorySourceStatusSellerStatusEnumEntityStatusDraft                InventorySourceStatusSellerStatusEnum = "ENTITY_STATUS_DRAFT"
	InventorySourceStatusSellerStatusEnumEntityStatusPaused               InventorySourceStatusSellerStatusEnum = "ENTITY_STATUS_PAUSED"
	InventorySourceStatusSellerStatusEnumEntityStatusScheduledForDeletion InventorySourceStatusSellerStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

type InventorySourceStatus struct {
	ConfigStatus      *InventorySourceStatusConfigStatusEnum `json:"configStatus"`
	EntityPauseReason *string                                `json:"entityPauseReason"`
	EntityStatus      *InventorySourceStatusEntityStatusEnum `json:"entityStatus"`
	SellerPauseReason *string                                `json:"sellerPauseReason"`
	SellerStatus      *InventorySourceStatusSellerStatusEnum `json:"sellerStatus"`
}
