package shared

type BlogList struct {
	BlogUserInfos []BlogUserInfo `json:"blogUserInfos"`
	Items         []Blog         `json:"items"`
	Kind          *string        `json:"kind"`
}
