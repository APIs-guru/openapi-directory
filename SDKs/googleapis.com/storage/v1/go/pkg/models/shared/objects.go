package shared

// Objects
// A list of objects.
type Objects struct {
	Items         []Object `json:"items,omitempty"`
	Kind          *string  `json:"kind,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Prefixes      []string `json:"prefixes,omitempty"`
}
