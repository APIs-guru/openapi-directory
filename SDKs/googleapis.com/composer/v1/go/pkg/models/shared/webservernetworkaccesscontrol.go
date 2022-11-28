package shared

// WebServerNetworkAccessControl
// Network-level access control policy for the Airflow web server.
type WebServerNetworkAccessControl struct {
	AllowedIPRanges []AllowedIPRange `json:"allowedIpRanges,omitempty"`
}
