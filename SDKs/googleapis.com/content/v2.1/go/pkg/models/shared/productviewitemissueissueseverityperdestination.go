package shared



type ProductViewItemIssueIssueSeverityPerDestination struct {
    DemotedCountries []string `json:"demotedCountries,omitempty"`
    Destination *string `json:"destination,omitempty"`
    DisapprovedCountries []string `json:"disapprovedCountries,omitempty"`
    
}

