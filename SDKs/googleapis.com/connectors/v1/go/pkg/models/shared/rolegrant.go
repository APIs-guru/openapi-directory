package shared

type RoleGrantPrincipalEnum string

const (
	RoleGrantPrincipalEnumPrincipalUnspecified RoleGrantPrincipalEnum = "PRINCIPAL_UNSPECIFIED"
	RoleGrantPrincipalEnumConnectorSa          RoleGrantPrincipalEnum = "CONNECTOR_SA"
)

type RoleGrant struct {
	HelperTextTemplate *string                 `json:"helperTextTemplate"`
	Principal          *RoleGrantPrincipalEnum `json:"principal"`
	Resource           *Resource               `json:"resource"`
	Roles              []string                `json:"roles"`
}
