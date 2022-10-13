package shared

type ListVulnerabilitiesResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Occurrences   []Occurrence `json:"occurrences"`
}
