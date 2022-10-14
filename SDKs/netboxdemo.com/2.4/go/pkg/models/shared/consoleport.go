package shared

type ConsolePort struct {
	ConnectionStatus *bool                    `json:"connection_status,omitempty"`
	CsPort           *NestedConsoleServerPort `json:"cs_port,omitempty"`
	Device           NestedDevice             `json:"device"`
	ID               *int64                   `json:"id,omitempty"`
	Name             string                   `json:"name"`
	Tags             []string                 `json:"tags,omitempty"`
}
