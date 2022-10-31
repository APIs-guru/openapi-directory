package shared

type BlogUserInfo struct {
	Blog         *Blog            `json:"blog,omitempty"`
	BlogUserInfo *BlogPerUserInfo `json:"blog_user_info,omitempty"`
	Kind         *string          `json:"kind,omitempty"`
}
