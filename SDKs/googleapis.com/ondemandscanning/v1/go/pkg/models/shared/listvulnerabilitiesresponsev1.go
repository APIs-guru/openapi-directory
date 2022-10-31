package shared



type ListVulnerabilitiesResponseV1 struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Occurrences []Occurrence `json:"occurrences,omitempty"`
    
}

