package shared

// InMemoryAuthModuleConfig
// Settings to authenticate users using the in memory user store
type InMemoryAuthModuleConfig struct {
	Desc          string         `json:"desc"`
	ID            string         `json:"id"`
	Name          string         `json:"name"`
	SessionMaxAge string         `json:"sessionMaxAge"`
	Type          string         `json:"type"`
	Users         []InMemoryUser `json:"users"`
}
