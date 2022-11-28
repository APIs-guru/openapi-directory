package shared

type RoleGrantPrincipalEnum string

const (
	RoleGrantPrincipalEnumPrincipalUnspecified RoleGrantPrincipalEnum = "PRINCIPAL_UNSPECIFIED"
	RoleGrantPrincipalEnumConnectorSa          RoleGrantPrincipalEnum = "CONNECTOR_SA"
)

// RoleGrant
// This configuration defines all the Cloud IAM roles that needs to be granted to a particular GCP resource for the selected prinicpal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
type RoleGrant struct {
	HelperTextTemplate *string                 `json:"helperTextTemplate,omitempty"`
	Principal          *RoleGrantPrincipalEnum `json:"principal,omitempty"`
	Resource           *Resource               `json:"resource,omitempty"`
	Roles              []string                `json:"roles,omitempty"`
}
