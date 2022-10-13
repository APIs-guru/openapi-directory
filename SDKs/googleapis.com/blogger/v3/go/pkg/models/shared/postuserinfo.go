package shared

type PostUserInfo struct {
	Kind         *string          `json:"kind"`
	Post         *Post            `json:"post"`
	PostUserInfo *PostPerUserInfo `json:"post_user_info"`
}
