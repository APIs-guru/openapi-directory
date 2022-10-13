package shared

type ReverseSSHConnectivity struct {
	VM     *string `json:"vm"`
	VMIP   *string `json:"vmIp"`
	VMPort *int32  `json:"vmPort"`
	Vpc    *string `json:"vpc"`
}
