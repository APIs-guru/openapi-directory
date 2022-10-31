package shared




type BlogPerUserInfoRoleEnum string

const (
    BlogPerUserInfoRoleEnumViewTypeUnspecified BlogPerUserInfoRoleEnum = "VIEW_TYPE_UNSPECIFIED"
BlogPerUserInfoRoleEnumReader BlogPerUserInfoRoleEnum = "READER"
BlogPerUserInfoRoleEnumAuthor BlogPerUserInfoRoleEnum = "AUTHOR"
BlogPerUserInfoRoleEnumAdmin BlogPerUserInfoRoleEnum = "ADMIN"
)


type BlogPerUserInfo struct {
    BlogID *string `json:"blogId,omitempty"`
    HasAdminAccess *bool `json:"hasAdminAccess,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PhotosAlbumKey *string `json:"photosAlbumKey,omitempty"`
    Role *BlogPerUserInfoRoleEnum `json:"role,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

