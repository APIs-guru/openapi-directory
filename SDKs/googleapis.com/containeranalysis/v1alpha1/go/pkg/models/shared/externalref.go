package shared

type ExternalRefCategoryEnum string

const (
	ExternalRefCategoryEnumCategoryUnspecified ExternalRefCategoryEnum = "CATEGORY_UNSPECIFIED"
	ExternalRefCategoryEnumSecurity            ExternalRefCategoryEnum = "SECURITY"
	ExternalRefCategoryEnumPackageManager      ExternalRefCategoryEnum = "PACKAGE_MANAGER"
	ExternalRefCategoryEnumPersistentID        ExternalRefCategoryEnum = "PERSISTENT_ID"
	ExternalRefCategoryEnumOther               ExternalRefCategoryEnum = "OTHER"
)

type ExternalRef struct {
	Category *ExternalRefCategoryEnum `json:"category"`
	Comment  *string                  `json:"comment"`
	Locator  *string                  `json:"locator"`
	Type     *string                  `json:"type"`
}
