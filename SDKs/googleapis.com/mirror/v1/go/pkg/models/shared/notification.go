package shared



type Notification struct {
    Collection *string `json:"collection,omitempty"`
    ItemID *string `json:"itemId,omitempty"`
    Operation *string `json:"operation,omitempty"`
    UserActions []UserAction `json:"userActions,omitempty"`
    UserToken *string `json:"userToken,omitempty"`
    VerifyToken *string `json:"verifyToken,omitempty"`
    
}

