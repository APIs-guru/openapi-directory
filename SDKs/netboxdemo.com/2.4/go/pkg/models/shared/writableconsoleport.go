package shared

type WritableConsolePort struct {
	ConnectionStatus *bool    `json:"connection_status"`
	CsPort           *int64   `json:"cs_port"`
	Device           int64    `json:"device"`
	ID               *int64   `json:"id"`
	Name             string   `json:"name"`
	Tags             []string `json:"tags"`
}
