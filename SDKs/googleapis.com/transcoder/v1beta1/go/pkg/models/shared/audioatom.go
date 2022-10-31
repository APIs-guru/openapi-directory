package shared

type AudioAtom struct {
	Channels []AudioChannel `json:"channels,omitempty"`
	Key      *string        `json:"key,omitempty"`
}
