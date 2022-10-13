package shared

type TCPSocketAction struct {
	Host *string `json:"host"`
	Port *int32  `json:"port"`
}
