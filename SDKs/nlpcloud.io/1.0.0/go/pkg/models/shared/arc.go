package shared

type Arc struct {
	Dir   string `json:"dir"`
	End   int64  `json:"end"`
	Label string `json:"label"`
	Start int64  `json:"start"`
	Text  string `json:"text"`
}
