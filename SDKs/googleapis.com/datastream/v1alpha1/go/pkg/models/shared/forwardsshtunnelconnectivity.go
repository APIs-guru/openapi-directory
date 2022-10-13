package shared

type ForwardSSHTunnelConnectivity struct {
	Hostname   *string `json:"hostname"`
	Password   *string `json:"password"`
	Port       *int32  `json:"port"`
	PrivateKey *string `json:"privateKey"`
	Username   *string `json:"username"`
}
