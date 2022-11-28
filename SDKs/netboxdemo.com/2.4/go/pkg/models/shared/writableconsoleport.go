package shared

type WritableConsolePortInput struct {
	ConnectionStatus *bool    `json:"connection_status,omitempty"`
	CsPort           *int64   `json:"cs_port,omitempty"`
	Device           int64    `json:"device"`
	Name             string   `json:"name"`
	Tags             []string `json:"tags,omitempty"`
}
