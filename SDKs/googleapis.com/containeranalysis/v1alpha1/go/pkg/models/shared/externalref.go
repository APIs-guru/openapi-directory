package shared

type ExternalRefCategoryEnum string

const (
	ExternalRefCategoryEnumCategoryUnspecified ExternalRefCategoryEnum = "CATEGORY_UNSPECIFIED"
	ExternalRefCategoryEnumSecurity            ExternalRefCategoryEnum = "SECURITY"
	ExternalRefCategoryEnumPackageManager      ExternalRefCategoryEnum = "PACKAGE_MANAGER"
	ExternalRefCategoryEnumPersistentID        ExternalRefCategoryEnum = "PERSISTENT_ID"
	ExternalRefCategoryEnumOther               ExternalRefCategoryEnum = "OTHER"
)

// ExternalRef
// An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package
type ExternalRef struct {
	Category *ExternalRefCategoryEnum `json:"category,omitempty"`
	Comment  *string                  `json:"comment,omitempty"`
	Locator  *string                  `json:"locator,omitempty"`
	Type     *string                  `json:"type,omitempty"`
}
