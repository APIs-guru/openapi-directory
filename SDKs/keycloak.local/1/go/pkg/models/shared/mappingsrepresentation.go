package shared

type MappingsRepresentation struct {
	ClientMappings map[string]interface{} `json:"clientMappings,omitempty"`
	RealmMappings  []RoleRepresentation   `json:"realmMappings,omitempty"`
}
