package shared

type GroupRepresentation struct {
	Access      map[string]interface{} `json:"access"`
	Attributes  map[string]interface{} `json:"attributes"`
	ClientRoles map[string]interface{} `json:"clientRoles"`
	ID          *string                `json:"id"`
	Name        *string                `json:"name"`
	Path        *string                `json:"path"`
	RealmRoles  []string               `json:"realmRoles"`
	SubGroups   []GroupRepresentation  `json:"subGroups"`
}
