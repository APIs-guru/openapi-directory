package shared

type PartialImportRepresentationPolicyEnum string

const (
	PartialImportRepresentationPolicyEnumSkip      PartialImportRepresentationPolicyEnum = "SKIP"
	PartialImportRepresentationPolicyEnumOverwrite PartialImportRepresentationPolicyEnum = "OVERWRITE"
	PartialImportRepresentationPolicyEnumFail      PartialImportRepresentationPolicyEnum = "FAIL"
)

type PartialImportRepresentation struct {
	Clients           []ClientRepresentation                 `json:"clients"`
	Groups            []GroupRepresentation                  `json:"groups"`
	IdentityProviders []IdentityProviderRepresentation       `json:"identityProviders"`
	IfResourceExists  *string                                `json:"ifResourceExists"`
	Policy            *PartialImportRepresentationPolicyEnum `json:"policy"`
	Roles             *RolesRepresentation                   `json:"roles"`
	Users             []UserRepresentation                   `json:"users"`
}
