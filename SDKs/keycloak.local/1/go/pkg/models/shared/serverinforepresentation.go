package shared

type ServerInfoRepresentation struct {
	BuiltinProtocolMappers map[string]interface{}             `json:"builtinProtocolMappers"`
	ClientImporters        []map[string]interface{}           `json:"clientImporters"`
	ClientInstallations    map[string]interface{}             `json:"clientInstallations"`
	ComponentTypes         map[string]interface{}             `json:"componentTypes"`
	Enums                  map[string]interface{}             `json:"enums"`
	IdentityProviders      []map[string]interface{}           `json:"identityProviders"`
	MemoryInfo             *MemoryInfoRepresentation          `json:"memoryInfo"`
	PasswordPolicies       []PasswordPolicyTypeRepresentation `json:"passwordPolicies"`
	ProfileInfo            *ProfileInfoRepresentation         `json:"profileInfo"`
	ProtocolMapperTypes    map[string]interface{}             `json:"protocolMapperTypes"`
	Providers              map[string]interface{}             `json:"providers"`
	SocialProviders        []map[string]interface{}           `json:"socialProviders"`
	SystemInfo             *SystemInfoRepresentation          `json:"systemInfo"`
	Themes                 map[string]interface{}             `json:"themes"`
}
