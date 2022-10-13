package shared

type RequestMetadata struct {
	DeviceInfo *DeviceInfo `json:"deviceInfo"`
	Domain     *string     `json:"domain"`
	SessionID  *string     `json:"sessionId"`
	UserID     *string     `json:"userId"`
}
