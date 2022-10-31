package shared

type GetVulnzOccurrencesSummaryResponse struct {
	Counts []SeverityCount `json:"counts,omitempty"`
}
