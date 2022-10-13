package shared

type Principal struct {
	GroupResourceName *string          `json:"groupResourceName"`
	GsuitePrincipal   *GSuitePrincipal `json:"gsuitePrincipal"`
	UserResourceName  *string          `json:"userResourceName"`
}
