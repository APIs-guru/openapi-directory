package shared

type PostUserInfo struct {
	Kind         *string          `json:"kind,omitempty"`
	Post         *Post            `json:"post,omitempty"`
	PostUserInfo *PostPerUserInfo `json:"post_user_info,omitempty"`
}
