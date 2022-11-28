package shared

// ListVulnerabilitiesResponseV1
// ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
type ListVulnerabilitiesResponseV1 struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Occurrences   []Occurrence `json:"occurrences,omitempty"`
}
