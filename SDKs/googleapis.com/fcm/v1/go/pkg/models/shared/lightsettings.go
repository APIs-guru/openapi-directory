package shared

type LightSettings struct {
	Color            *Color  `json:"color,omitempty"`
	LightOffDuration *string `json:"lightOffDuration,omitempty"`
	LightOnDuration  *string `json:"lightOnDuration,omitempty"`
}
