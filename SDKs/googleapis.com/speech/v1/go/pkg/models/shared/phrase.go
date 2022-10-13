package shared

type Phrase struct {
	Boost *float32 `json:"boost"`
	Value *string  `json:"value"`
}
