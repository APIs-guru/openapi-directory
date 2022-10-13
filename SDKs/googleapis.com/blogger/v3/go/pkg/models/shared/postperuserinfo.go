package shared

type PostPerUserInfo struct {
	BlogID        *string `json:"blogId"`
	HasEditAccess *bool   `json:"hasEditAccess"`
	Kind          *string `json:"kind"`
	PostID        *string `json:"postId"`
	UserID        *string `json:"userId"`
}
