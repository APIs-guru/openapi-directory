package shared

type RoleRepresentationComposites struct {
	Client map[string]interface{} `json:"client"`
	Realm  []string               `json:"realm"`
}
