package shared

type VmwareSourceDetails struct {
	Password   *string `json:"password,omitempty"`
	Thumbprint *string `json:"thumbprint,omitempty"`
	Username   *string `json:"username,omitempty"`
	VcenterIP  *string `json:"vcenterIp,omitempty"`
}
