package shared

type MediaItemWrapped struct {
	Callback *string     `json:"callback"`
	Meta     *Meta       `json:"meta"`
	Results  []MediaItem `json:"results"`
}
