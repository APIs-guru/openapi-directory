package shared

type GSuitePrincipal struct {
	GsuiteDomain     *bool   `json:"gsuiteDomain"`
	GsuiteGroupEmail *string `json:"gsuiteGroupEmail"`
	GsuiteUserEmail  *string `json:"gsuiteUserEmail"`
}
