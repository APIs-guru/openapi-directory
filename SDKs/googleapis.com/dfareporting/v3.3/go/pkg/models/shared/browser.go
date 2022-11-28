package shared

// Browser
// Contains information about a browser that can be targeted by ads.
type Browser struct {
	BrowserVersionID *string `json:"browserVersionId,omitempty"`
	DartID           *string `json:"dartId,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	MajorVersion     *string `json:"majorVersion,omitempty"`
	MinorVersion     *string `json:"minorVersion,omitempty"`
	Name             *string `json:"name,omitempty"`
}
