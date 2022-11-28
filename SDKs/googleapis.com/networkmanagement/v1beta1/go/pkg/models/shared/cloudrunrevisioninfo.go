package shared

// CloudRunRevisionInfo
// For display only. Metadata associated with a Cloud Run revision.
type CloudRunRevisionInfo struct {
	DisplayName *string `json:"displayName,omitempty"`
	Location    *string `json:"location,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
	ServiceURI  *string `json:"serviceUri,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
