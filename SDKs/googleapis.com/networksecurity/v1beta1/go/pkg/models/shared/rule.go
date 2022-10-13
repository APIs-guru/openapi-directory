package shared

type Rule struct {
	Destinations []Destination `json:"destinations"`
	Sources      []Source      `json:"sources"`
}
