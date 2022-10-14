package shared

type AudioChannelInput struct {
	Channel *int32   `json:"channel,omitempty"`
	GainDb  *float64 `json:"gainDb,omitempty"`
	Key     *string  `json:"key,omitempty"`
	Track   *int32   `json:"track,omitempty"`
}
