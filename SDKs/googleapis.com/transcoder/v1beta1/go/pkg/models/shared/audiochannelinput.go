package shared

type AudioChannelInput struct {
	Channel *int32   `json:"channel"`
	GainDb  *float64 `json:"gainDb"`
	Key     *string  `json:"key"`
	Track   *int32   `json:"track"`
}
