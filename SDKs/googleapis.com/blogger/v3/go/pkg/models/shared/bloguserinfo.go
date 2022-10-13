package shared

type BlogUserInfo struct {
	Blog         *Blog            `json:"blog"`
	BlogUserInfo *BlogPerUserInfo `json:"blog_user_info"`
	Kind         *string          `json:"kind"`
}
