package shared

type ItemOriginTypeEnum string

const (
	ItemOriginTypeEnumOriginTypeUnspecified ItemOriginTypeEnum = "ORIGIN_TYPE_UNSPECIFIED"
	ItemOriginTypeEnumInventoryReport       ItemOriginTypeEnum = "INVENTORY_REPORT"
)

type ItemTypeEnum string

const (
	ItemTypeEnumTypeUnspecified  ItemTypeEnum = "TYPE_UNSPECIFIED"
	ItemTypeEnumInstalledPackage ItemTypeEnum = "INSTALLED_PACKAGE"
	ItemTypeEnumAvailablePackage ItemTypeEnum = "AVAILABLE_PACKAGE"
)

type Item struct {
	AvailablePackage *SoftwarePackage    `json:"availablePackage"`
	CreateTime       *string             `json:"createTime"`
	ID               *string             `json:"id"`
	InstalledPackage *SoftwarePackage    `json:"installedPackage"`
	OriginType       *ItemOriginTypeEnum `json:"originType"`
	Type             *ItemTypeEnum       `json:"type"`
	UpdateTime       *string             `json:"updateTime"`
}
