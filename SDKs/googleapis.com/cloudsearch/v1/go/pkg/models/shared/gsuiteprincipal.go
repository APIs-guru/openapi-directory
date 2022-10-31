package shared



type GSuitePrincipal struct {
    GsuiteDomain *bool `json:"gsuiteDomain,omitempty"`
    GsuiteGroupEmail *string `json:"gsuiteGroupEmail,omitempty"`
    GsuiteUserEmail *string `json:"gsuiteUserEmail,omitempty"`
    
}

