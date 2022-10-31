package shared



type BlogList struct {
    BlogUserInfos []BlogUserInfo `json:"blogUserInfos,omitempty"`
    Items []Blog `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

