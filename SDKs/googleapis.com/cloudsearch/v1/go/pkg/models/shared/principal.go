package shared

// Principal
// Reference to a user, group, or domain.
type Principal struct {
	GroupResourceName *string          `json:"groupResourceName,omitempty"`
	GsuitePrincipal   *GSuitePrincipal `json:"gsuitePrincipal,omitempty"`
	UserResourceName  *string          `json:"userResourceName,omitempty"`
}
