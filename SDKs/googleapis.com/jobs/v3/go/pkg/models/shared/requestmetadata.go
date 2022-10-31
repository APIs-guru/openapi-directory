package shared



type RequestMetadata struct {
    DeviceInfo *DeviceInfo `json:"deviceInfo,omitempty"`
    Domain *string `json:"domain,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

