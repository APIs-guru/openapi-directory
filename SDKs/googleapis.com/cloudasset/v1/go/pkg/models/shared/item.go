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
	AvailablePackage *SoftwarePackage    `json:"availablePackage,omitempty"`
	CreateTime       *string             `json:"createTime,omitempty"`
	ID               *string             `json:"id,omitempty"`
	InstalledPackage *SoftwarePackage    `json:"installedPackage,omitempty"`
	OriginType       *ItemOriginTypeEnum `json:"originType,omitempty"`
	Type             *ItemTypeEnum       `json:"type,omitempty"`
	UpdateTime       *string             `json:"updateTime,omitempty"`
}
