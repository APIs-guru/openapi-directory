package shared

type WebfontList struct {
	Items []Webfont `json:"items"`
	Kind  *string   `json:"kind"`
}
