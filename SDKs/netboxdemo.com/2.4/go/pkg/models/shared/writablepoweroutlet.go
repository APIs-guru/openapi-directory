package shared

type WritablePowerOutlet struct {
	ConnectedPort *string  `json:"connected_port"`
	Device        int64    `json:"device"`
	ID            *int64   `json:"id"`
	Name          string   `json:"name"`
	Tags          []string `json:"tags"`
}
