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
	AvailablePackage *InventorySoftwarePackage    `json:"availablePackage"`
	CreateTime       *string                      `json:"createTime"`
	ID               *string                      `json:"id"`
	InstalledPackage *InventorySoftwarePackage    `json:"installedPackage"`
	OriginType       *InventoryItemOriginTypeEnum `json:"originType"`
	Type             *InventoryItemTypeEnum       `json:"type"`
	UpdateTime       *string                      `json:"updateTime"`
}
