package shared

type NestedConsoleServerPort struct {
	Device      *NestedDevice `json:"device"`
	ID          *int64        `json:"id"`
	IsConnected *string       `json:"is_connected"`
	Name        string        `json:"name"`
	URL         *string       `json:"url"`
}
