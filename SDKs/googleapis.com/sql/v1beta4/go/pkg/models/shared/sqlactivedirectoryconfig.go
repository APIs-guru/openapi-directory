package shared

// SQLActiveDirectoryConfig
// Active Directory configuration, relevant only for Cloud SQL for SQL Server.
type SQLActiveDirectoryConfig struct {
	Domain *string `json:"domain,omitempty"`
	Kind   *string `json:"kind,omitempty"`
}
