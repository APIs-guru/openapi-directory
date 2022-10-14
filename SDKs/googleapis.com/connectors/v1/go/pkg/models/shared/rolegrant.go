package shared

type RoleGrantPrincipalEnum string

const (
	RoleGrantPrincipalEnumPrincipalUnspecified RoleGrantPrincipalEnum = "PRINCIPAL_UNSPECIFIED"
	RoleGrantPrincipalEnumConnectorSa          RoleGrantPrincipalEnum = "CONNECTOR_SA"
)

type RoleGrant struct {
	HelperTextTemplate *string                 `json:"helperTextTemplate,omitempty"`
	Principal          *RoleGrantPrincipalEnum `json:"principal,omitempty"`
	Resource           *Resource               `json:"resource,omitempty"`
	Roles              []string                `json:"roles,omitempty"`
}
