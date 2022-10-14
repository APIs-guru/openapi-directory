package shared

type ReverseSSHConnectivity struct {
	VM     *string `json:"vm,omitempty"`
	VMIP   *string `json:"vmIp,omitempty"`
	VMPort *int32  `json:"vmPort,omitempty"`
	Vpc    *string `json:"vpc,omitempty"`
}
