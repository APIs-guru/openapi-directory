package shared

type AudioAtom struct {
	Channels []AudioChannel `json:"channels"`
	Key      *string        `json:"key"`
}
