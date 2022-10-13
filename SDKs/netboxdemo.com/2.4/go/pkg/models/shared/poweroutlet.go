package shared

type PowerOutlet struct {
	ConnectedPort *string      `json:"connected_port"`
	Device        NestedDevice `json:"device"`
	ID            *int64       `json:"id"`
	Name          string       `json:"name"`
	Tags          []string     `json:"tags"`
}
