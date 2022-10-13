package shared

type VmwareSourceDetails struct {
	Password   *string `json:"password"`
	Thumbprint *string `json:"thumbprint"`
	Username   *string `json:"username"`
	VcenterIP  *string `json:"vcenterIp"`
}
