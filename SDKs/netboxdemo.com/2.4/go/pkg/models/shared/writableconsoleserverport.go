package shared

type WritableConsoleServerPort struct {
	ConnectedConsole *string  `json:"connected_console,omitempty"`
	Device           int64    `json:"device"`
	ID               *int64   `json:"id,omitempty"`
	Name             string   `json:"name"`
	Tags             []string `json:"tags,omitempty"`
}
