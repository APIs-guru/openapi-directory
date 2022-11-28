package shared

// ProductViewItemIssueIssueSeverityPerDestination
// Issue severity for all affected regions in a destination.
type ProductViewItemIssueIssueSeverityPerDestination struct {
	DemotedCountries     []string `json:"demotedCountries,omitempty"`
	Destination          *string  `json:"destination,omitempty"`
	DisapprovedCountries []string `json:"disapprovedCountries,omitempty"`
}
