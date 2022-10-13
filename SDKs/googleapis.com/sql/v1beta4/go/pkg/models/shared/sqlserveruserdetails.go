package shared

type SQLServerUserDetails struct {
	Disabled    *bool    `json:"disabled"`
	ServerRoles []string `json:"serverRoles"`
}
