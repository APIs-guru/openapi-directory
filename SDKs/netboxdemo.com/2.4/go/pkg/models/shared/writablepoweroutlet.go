package shared

type WritablePowerOutletInput struct {
	Device int64    `json:"device"`
	Name   string   `json:"name"`
	Tags   []string `json:"tags,omitempty"`
}
