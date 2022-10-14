package shared

type InventoryItemOriginTypeEnum string

const (
	InventoryItemOriginTypeEnumOriginTypeUnspecified InventoryItemOriginTypeEnum = "ORIGIN_TYPE_UNSPECIFIED"
	InventoryItemOriginTypeEnumInventoryReport       InventoryItemOriginTypeEnum = "INVENTORY_REPORT"
)

type InventoryItemTypeEnum string

const (
	InventoryItemTypeEnumTypeUnspecified  InventoryItemTypeEnum = "TYPE_UNSPECIFIED"
	InventoryItemTypeEnumInstalledPackage InventoryItemTypeEnum = "INSTALLED_PACKAGE"
	InventoryItemTypeEnumAvailablePackage InventoryItemTypeEnum = "AVAILABLE_PACKAGE"
)

type InventoryItem struct {
	AvailablePackage *InventorySoftwarePackage    `json:"availablePackage,omitempty"`
	CreateTime       *string                      `json:"createTime,omitempty"`
	ID               *string                      `json:"id,omitempty"`
	InstalledPackage *InventorySoftwarePackage    `json:"installedPackage,omitempty"`
	OriginType       *InventoryItemOriginTypeEnum `json:"originType,omitempty"`
	Type             *InventoryItemTypeEnum       `json:"type,omitempty"`
	UpdateTime       *string                      `json:"updateTime,omitempty"`
}
