package shared

// ListUtilizationReportsResponse
// Response message for 'ListUtilizationReports' request.
type ListUtilizationReportsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
	UtilizationReports []UtilizationReport `json:"utilizationReports,omitempty"`
}
