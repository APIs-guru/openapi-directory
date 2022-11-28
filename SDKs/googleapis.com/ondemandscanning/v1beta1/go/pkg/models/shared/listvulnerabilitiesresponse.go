package shared

// ListVulnerabilitiesResponse
// ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
type ListVulnerabilitiesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Occurrences   []Occurrence `json:"occurrences,omitempty"`
}
