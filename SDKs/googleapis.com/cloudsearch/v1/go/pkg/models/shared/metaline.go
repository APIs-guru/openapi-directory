package shared

// Metaline
// A metaline is a list of properties that are displayed along with the search result to provide context.
type Metaline struct {
	Properties []DisplayedProperty `json:"properties,omitempty"`
}
