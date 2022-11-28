package shared

// RequestMetadata
// Input only. Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
type RequestMetadata struct {
	DeviceInfo *DeviceInfo `json:"deviceInfo,omitempty"`
	Domain     *string     `json:"domain,omitempty"`
	SessionID  *string     `json:"sessionId,omitempty"`
	UserID     *string     `json:"userId,omitempty"`
}
