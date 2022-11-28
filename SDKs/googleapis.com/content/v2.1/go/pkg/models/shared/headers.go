package shared

// Headers
// A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.
type Headers struct {
	Locations            []LocationIDSet `json:"locations,omitempty"`
	NumberOfItems        []string        `json:"numberOfItems,omitempty"`
	PostalCodeGroupNames []string        `json:"postalCodeGroupNames,omitempty"`
	Prices               []Price         `json:"prices,omitempty"`
	Weights              []Weight        `json:"weights,omitempty"`
}
