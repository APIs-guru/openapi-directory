package shared

type MappingsRepresentation struct {
	ClientMappings map[string]interface{} `json:"clientMappings"`
	RealmMappings  []RoleRepresentation   `json:"realmMappings"`
}
