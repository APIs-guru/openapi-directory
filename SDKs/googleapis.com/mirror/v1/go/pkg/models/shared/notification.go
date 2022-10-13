package shared

type Notification struct {
	Collection  *string      `json:"collection"`
	ItemID      *string      `json:"itemId"`
	Operation   *string      `json:"operation"`
	UserActions []UserAction `json:"userActions"`
	UserToken   *string      `json:"userToken"`
	VerifyToken *string      `json:"verifyToken"`
}
