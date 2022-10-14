package shared

type RolesRepresentation struct {
	Client map[string]interface{} `json:"client,omitempty"`
	Realm  []RoleRepresentation   `json:"realm,omitempty"`
}
