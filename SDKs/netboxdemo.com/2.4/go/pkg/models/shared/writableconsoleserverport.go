package shared

type WritableConsoleServerPort struct {
	ConnectedConsole *string  `json:"connected_console"`
	Device           int64    `json:"device"`
	ID               *int64   `json:"id"`
	Name             string   `json:"name"`
	Tags             []string `json:"tags"`
}
