package shared

// WebfontList
// Response containing the list of fonts currently served by the Google Fonts API.
type WebfontList struct {
	Items []Webfont `json:"items,omitempty"`
	Kind  *string   `json:"kind,omitempty"`
}
