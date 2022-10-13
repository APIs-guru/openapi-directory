package shared

type AuthDetailsRepresentation struct {
	ClientID  *string `json:"clientId"`
	IPAddress *string `json:"ipAddress"`
	RealmID   *string `json:"realmId"`
	UserID    *string `json:"userId"`
}
