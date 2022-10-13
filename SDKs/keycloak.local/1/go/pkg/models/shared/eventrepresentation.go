package shared

type EventRepresentation struct {
	ClientID  *string                `json:"clientId"`
	Details   map[string]interface{} `json:"details"`
	Error     *string                `json:"error"`
	IPAddress *string                `json:"ipAddress"`
	RealmID   *string                `json:"realmId"`
	SessionID *string                `json:"sessionId"`
	Time      *int64                 `json:"time"`
	Type      *string                `json:"type"`
	UserID    *string                `json:"userId"`
}
