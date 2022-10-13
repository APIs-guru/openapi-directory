package shared

type HiddenPlayer struct {
	HiddenTimeMillis *string `json:"hiddenTimeMillis"`
	Kind             *string `json:"kind"`
	Player           *Player `json:"player"`
}
