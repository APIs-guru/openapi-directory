package shared

type LightSettings struct {
	Color            *Color  `json:"color"`
	LightOffDuration *string `json:"lightOffDuration"`
	LightOnDuration  *string `json:"lightOnDuration"`
}
