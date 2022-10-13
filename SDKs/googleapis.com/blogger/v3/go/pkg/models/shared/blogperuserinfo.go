package shared

type BlogPerUserInfoRoleEnum string

const (
	BlogPerUserInfoRoleEnumViewTypeUnspecified BlogPerUserInfoRoleEnum = "VIEW_TYPE_UNSPECIFIED"
	BlogPerUserInfoRoleEnumReader              BlogPerUserInfoRoleEnum = "READER"
	BlogPerUserInfoRoleEnumAuthor              BlogPerUserInfoRoleEnum = "AUTHOR"
	BlogPerUserInfoRoleEnumAdmin               BlogPerUserInfoRoleEnum = "ADMIN"
)

type BlogPerUserInfo struct {
	BlogID         *string                  `json:"blogId"`
	HasAdminAccess *bool                    `json:"hasAdminAccess"`
	Kind           *string                  `json:"kind"`
	PhotosAlbumKey *string                  `json:"photosAlbumKey"`
	Role           *BlogPerUserInfoRoleEnum `json:"role"`
	UserID         *string                  `json:"userId"`
}
