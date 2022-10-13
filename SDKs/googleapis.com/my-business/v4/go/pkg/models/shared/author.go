package shared

type AuthorTypeEnum string

const (
	AuthorTypeEnumAuthorTypeUnspecified AuthorTypeEnum = "AUTHOR_TYPE_UNSPECIFIED"
	AuthorTypeEnumRegularUser           AuthorTypeEnum = "REGULAR_USER"
	AuthorTypeEnumLocalGuide            AuthorTypeEnum = "LOCAL_GUIDE"
	AuthorTypeEnumMerchant              AuthorTypeEnum = "MERCHANT"
)

type Author struct {
	DisplayName     *string         `json:"displayName"`
	ProfilePhotoURL *string         `json:"profilePhotoUrl"`
	Type            *AuthorTypeEnum `json:"type"`
}
