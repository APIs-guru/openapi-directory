package shared

type EventRepresentation struct {
	ClientID  *string                `json:"clientId,omitempty"`
	Details   map[string]interface{} `json:"details,omitempty"`
	Error     *string                `json:"error,omitempty"`
	IPAddress *string                `json:"ipAddress,omitempty"`
	RealmID   *string                `json:"realmId,omitempty"`
	SessionID *string                `json:"sessionId,omitempty"`
	Time      *int64                 `json:"time,omitempty"`
	Type      *string                `json:"type,omitempty"`
	UserID    *string                `json:"userId,omitempty"`
}
