package shared

type MediaItemWrapped struct {
	Callback *string     `json:"callback,omitempty"`
	Meta     *Meta       `json:"meta,omitempty"`
	Results  []MediaItem `json:"results,omitempty"`
}
