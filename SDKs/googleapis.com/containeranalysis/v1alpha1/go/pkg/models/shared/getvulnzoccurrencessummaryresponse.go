package shared

// GetVulnzOccurrencesSummaryResponse
// A summary of how many vulnz occurrences there are per severity type. counts by groups, or if we should have different summary messages like this.
type GetVulnzOccurrencesSummaryResponse struct {
	Counts []SeverityCount `json:"counts,omitempty"`
}
