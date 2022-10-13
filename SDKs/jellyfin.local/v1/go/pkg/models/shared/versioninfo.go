package shared

type VersionInfo struct {
	VersionNumber  *Version `json:"VersionNumber"`
	Changelog      *string  `json:"changelog"`
	Checksum       *string  `json:"checksum"`
	RepositoryName *string  `json:"repositoryName"`
	RepositoryURL  *string  `json:"repositoryUrl"`
	SourceURL      *string  `json:"sourceUrl"`
	TargetAbi      *string  `json:"targetAbi"`
	Timestamp      *string  `json:"timestamp"`
	Version        *string  `json:"version"`
}
