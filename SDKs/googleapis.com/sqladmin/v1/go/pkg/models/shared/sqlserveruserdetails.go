package shared

// SQLServerUserDetails
// Represents a Sql Server user on the Cloud SQL instance.
type SQLServerUserDetails struct {
	Disabled    *bool    `json:"disabled,omitempty"`
	ServerRoles []string `json:"serverRoles,omitempty"`
}
