package shared

// HiddenPlayer
// The HiddenPlayer resource.
type HiddenPlayer struct {
	HiddenTimeMillis *string `json:"hiddenTimeMillis,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	Player           *Player `json:"player,omitempty"`
}
