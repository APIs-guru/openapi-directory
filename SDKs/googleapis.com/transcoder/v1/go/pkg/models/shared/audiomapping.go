package shared

type AudioMapping struct {
	AtomKey       *string  `json:"atomKey"`
	GainDb        *float64 `json:"gainDb"`
	InputChannel  *int32   `json:"inputChannel"`
	InputKey      *string  `json:"inputKey"`
	InputTrack    *int32   `json:"inputTrack"`
	OutputChannel *int32   `json:"outputChannel"`
}
