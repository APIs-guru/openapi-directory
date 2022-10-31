package shared



type TrafficTarget struct {
    ConfigurationName *string `json:"configurationName,omitempty"`
    LatestRevision *bool `json:"latestRevision,omitempty"`
    Percent *int32 `json:"percent,omitempty"`
    RevisionName *string `json:"revisionName,omitempty"`
    Tag *string `json:"tag,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

