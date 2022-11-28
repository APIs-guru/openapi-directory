package shared

// RequestMetadata
// Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
type RequestMetadata struct {
	AllowMissingIds *bool       `json:"allowMissingIds,omitempty"`
	DeviceInfo      *DeviceInfo `json:"deviceInfo,omitempty"`
	Domain          *string     `json:"domain,omitempty"`
	SessionID       *string     `json:"sessionId,omitempty"`
	UserID          *string     `json:"userId,omitempty"`
}
