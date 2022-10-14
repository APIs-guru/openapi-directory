package shared

type RequestMetadata struct {
	AllowMissingIds *bool       `json:"allowMissingIds,omitempty"`
	DeviceInfo      *DeviceInfo `json:"deviceInfo,omitempty"`
	Domain          *string     `json:"domain,omitempty"`
	SessionID       *string     `json:"sessionId,omitempty"`
	UserID          *string     `json:"userId,omitempty"`
}
