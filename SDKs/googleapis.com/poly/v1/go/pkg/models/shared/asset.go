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
	AuthorName         *string              `json:"authorName"`
	CreateTime         *string              `json:"createTime"`
	Description        *string              `json:"description"`
	DisplayName        *string              `json:"displayName"`
	Formats            []Format             `json:"formats"`
	IsCurated          *bool                `json:"isCurated"`
	License            *AssetLicenseEnum    `json:"license"`
	Metadata           *string              `json:"metadata"`
	Name               *string              `json:"name"`
	PresentationParams *PresentationParams  `json:"presentationParams"`
	RemixInfo          *RemixInfo           `json:"remixInfo"`
	Thumbnail          *File                `json:"thumbnail"`
	UpdateTime         *string              `json:"updateTime"`
	Visibility         *AssetVisibilityEnum `json:"visibility"`
}
