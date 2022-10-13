package shared

type ConsolePort struct {
	ConnectionStatus *bool                    `json:"connection_status"`
	CsPort           *NestedConsoleServerPort `json:"cs_port"`
	Device           NestedDevice             `json:"device"`
	ID               *int64                   `json:"id"`
	Name             string                   `json:"name"`
	Tags             []string                 `json:"tags"`
}
