package shared



type PostPerUserInfo struct {
    BlogID *string `json:"blogId,omitempty"`
    HasEditAccess *bool `json:"hasEditAccess,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PostID *string `json:"postId,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

