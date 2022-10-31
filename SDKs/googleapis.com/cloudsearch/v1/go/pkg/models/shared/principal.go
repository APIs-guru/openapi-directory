package shared



type Principal struct {
    GroupResourceName *string `json:"groupResourceName,omitempty"`
    GsuitePrincipal *GSuitePrincipal `json:"gsuitePrincipal,omitempty"`
    UserResourceName *string `json:"userResourceName,omitempty"`
    
}

