package shared




type PartialImportRepresentationPolicyEnum string

const (
    PartialImportRepresentationPolicyEnumSkip PartialImportRepresentationPolicyEnum = "SKIP"
PartialImportRepresentationPolicyEnumOverwrite PartialImportRepresentationPolicyEnum = "OVERWRITE"
PartialImportRepresentationPolicyEnumFail PartialImportRepresentationPolicyEnum = "FAIL"
)


type PartialImportRepresentation struct {
    Clients []ClientRepresentation `json:"clients,omitempty"`
    Groups []GroupRepresentation `json:"groups,omitempty"`
    IdentityProviders []IdentityProviderRepresentation `json:"identityProviders,omitempty"`
    IfResourceExists *string `json:"ifResourceExists,omitempty"`
    Policy *PartialImportRepresentationPolicyEnum `json:"policy,omitempty"`
    Roles *RolesRepresentation `json:"roles,omitempty"`
    Users []UserRepresentation `json:"users,omitempty"`
    
}

