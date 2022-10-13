package shared

type UserSessionRepresentation struct {
	Clients    map[string]interface{} `json:"clients"`
	ID         *string                `json:"id"`
	IPAddress  *string                `json:"ipAddress"`
	LastAccess *int64                 `json:"lastAccess"`
	Start      *int64                 `json:"start"`
	UserID     *string                `json:"userId"`
	Username   *string                `json:"username"`
}
