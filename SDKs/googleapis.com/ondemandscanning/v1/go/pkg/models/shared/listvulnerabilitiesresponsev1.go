package shared

type ListVulnerabilitiesResponseV1 struct {
	NextPageToken *string      `json:"nextPageToken"`
	Occurrences   []Occurrence `json:"occurrences"`
}
