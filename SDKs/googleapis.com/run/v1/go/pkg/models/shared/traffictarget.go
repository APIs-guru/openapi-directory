package shared

type TrafficTarget struct {
	ConfigurationName *string `json:"configurationName"`
	LatestRevision    *bool   `json:"latestRevision"`
	Percent           *int32  `json:"percent"`
	RevisionName      *string `json:"revisionName"`
	Tag               *string `json:"tag"`
	URL               *string `json:"url"`
}
