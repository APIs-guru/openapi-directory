package shared

type AuthDetailsRepresentation struct {
	ClientID  *string `json:"clientId,omitempty"`
	IPAddress *string `json:"ipAddress,omitempty"`
	RealmID   *string `json:"realmId,omitempty"`
	UserID    *string `json:"userId,omitempty"`
}
