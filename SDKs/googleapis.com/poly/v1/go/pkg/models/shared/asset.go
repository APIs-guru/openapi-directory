package shared

type AssetLicenseEnum string

const (
	AssetLicenseEnumUnknown           AssetLicenseEnum = "UNKNOWN"
	AssetLicenseEnumCreativeCommonsBy AssetLicenseEnum = "CREATIVE_COMMONS_BY"
	AssetLicenseEnumAllRightsReserved AssetLicenseEnum = "ALL_RIGHTS_RESERVED"
)

type AssetVisibilityEnum string

const (
	AssetVisibilityEnumVisibilityUnspecified AssetVisibilityEnum = "VISIBILITY_UNSPECIFIED"
	AssetVisibilityEnumPrivate               AssetVisibilityEnum = "PRIVATE"
	AssetVisibilityEnumUnlisted              AssetVisibilityEnum = "UNLISTED"
	AssetVisibilityEnumPublic                AssetVisibilityEnum = "PUBLIC"
)

type Asset struct {
	AuthorName         *string              `json:"authorName,omitempty"`
	CreateTime         *string              `json:"createTime,omitempty"`
	Description        *string              `json:"description,omitempty"`
	DisplayName        *string              `json:"displayName,omitempty"`
	Formats            []Format             `json:"formats,omitempty"`
	IsCurated          *bool                `json:"isCurated,omitempty"`
	License            *AssetLicenseEnum    `json:"license,omitempty"`
	Metadata           *string              `json:"metadata,omitempty"`
	Name               *string              `json:"name,omitempty"`
	PresentationParams *PresentationParams  `json:"presentationParams,omitempty"`
	RemixInfo          *RemixInfo           `json:"remixInfo,omitempty"`
	Thumbnail          *File                `json:"thumbnail,omitempty"`
	UpdateTime         *string              `json:"updateTime,omitempty"`
	Visibility         *AssetVisibilityEnum `json:"visibility,omitempty"`
}
