package shared



type ServerInfoRepresentation struct {
    BuiltinProtocolMappers map[string]interface{} `json:"builtinProtocolMappers,omitempty"`
    ClientImporters []map[string]interface{} `json:"clientImporters,omitempty"`
    ClientInstallations map[string]interface{} `json:"clientInstallations,omitempty"`
    ComponentTypes map[string]interface{} `json:"componentTypes,omitempty"`
    Enums map[string]interface{} `json:"enums,omitempty"`
    IdentityProviders []map[string]interface{} `json:"identityProviders,omitempty"`
    MemoryInfo *MemoryInfoRepresentation `json:"memoryInfo,omitempty"`
    PasswordPolicies []PasswordPolicyTypeRepresentation `json:"passwordPolicies,omitempty"`
    ProfileInfo *ProfileInfoRepresentation `json:"profileInfo,omitempty"`
    ProtocolMapperTypes map[string]interface{} `json:"protocolMapperTypes,omitempty"`
    Providers map[string]interface{} `json:"providers,omitempty"`
    SocialProviders []map[string]interface{} `json:"socialProviders,omitempty"`
    SystemInfo *SystemInfoRepresentation `json:"systemInfo,omitempty"`
    Themes map[string]interface{} `json:"themes,omitempty"`
    
}

