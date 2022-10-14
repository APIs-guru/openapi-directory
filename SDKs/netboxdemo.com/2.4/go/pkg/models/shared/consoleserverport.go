package shared

type ConsoleServerPort struct {
	ConnectedConsole *string      `json:"connected_console,omitempty"`
	Device           NestedDevice `json:"device"`
	ID               *int64       `json:"id,omitempty"`
	Name             string       `json:"name"`
	Tags             []string     `json:"tags,omitempty"`
}
