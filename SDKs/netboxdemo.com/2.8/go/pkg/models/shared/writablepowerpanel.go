package shared

type WritablePowerPanelInput struct {
	Name      string `json:"name"`
	RackGroup *int64 `json:"rack_group,omitempty"`
	Site      int64  `json:"site"`
}
