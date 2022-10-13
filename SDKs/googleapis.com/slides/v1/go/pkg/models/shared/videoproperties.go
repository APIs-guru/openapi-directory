package shared

type VideoProperties struct {
	AutoPlay *bool    `json:"autoPlay"`
	End      *int64   `json:"end"`
	Mute     *bool    `json:"mute"`
	Outline  *Outline `json:"outline"`
	Start    *int64   `json:"start"`
}
