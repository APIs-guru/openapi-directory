package shared

type ProductViewItemIssueIssueSeverityPerDestination struct {
	DemotedCountries     []string `json:"demotedCountries"`
	Destination          *string  `json:"destination"`
	DisapprovedCountries []string `json:"disapprovedCountries"`
}
