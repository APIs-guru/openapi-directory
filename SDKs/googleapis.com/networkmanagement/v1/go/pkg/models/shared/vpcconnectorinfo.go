package shared

// VpcConnectorInfo
// For display only. Metadata associated with a VPC connector.
type VpcConnectorInfo struct {
	DisplayName *string `json:"displayName,omitempty"`
	Location    *string `json:"location,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
