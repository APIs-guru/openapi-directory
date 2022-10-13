package shared

type Browser struct {
	BrowserVersionID *string `json:"browserVersionId"`
	DartID           *string `json:"dartId"`
	Kind             *string `json:"kind"`
	MajorVersion     *string `json:"majorVersion"`
	MinorVersion     *string `json:"minorVersion"`
	Name             *string `json:"name"`
}
