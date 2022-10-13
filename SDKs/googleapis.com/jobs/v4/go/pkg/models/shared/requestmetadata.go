package shared

type RequestMetadata struct {
	AllowMissingIds *bool       `json:"allowMissingIds"`
	DeviceInfo      *DeviceInfo `json:"deviceInfo"`
	Domain          *string     `json:"domain"`
	SessionID       *string     `json:"sessionId"`
	UserID          *string     `json:"userId"`
}
