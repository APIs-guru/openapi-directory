package shared

type ConsoleServerPort struct {
	ConnectedConsole *string      `json:"connected_console"`
	Device           NestedDevice `json:"device"`
	ID               *int64       `json:"id"`
	Name             string       `json:"name"`
	Tags             []string     `json:"tags"`
}
