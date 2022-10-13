package shared

type RolesRepresentation struct {
	Client map[string]interface{} `json:"client"`
	Realm  []RoleRepresentation   `json:"realm"`
}
