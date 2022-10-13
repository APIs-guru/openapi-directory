package shared

type ColorStop struct {
	Alpha    *float32     `json:"alpha"`
	Color    *OpaqueColor `json:"color"`
	Position *float32     `json:"position"`
}
