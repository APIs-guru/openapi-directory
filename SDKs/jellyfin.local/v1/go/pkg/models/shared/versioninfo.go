package shared

// VersionInfo
// Defines the MediaBrowser.Model.Updates.VersionInfo class.
type VersionInfo struct {
	VersionNumber  *Version `json:"VersionNumber,omitempty"`
	Changelog      *string  `json:"changelog,omitempty"`
	Checksum       *string  `json:"checksum,omitempty"`
	RepositoryName *string  `json:"repositoryName,omitempty"`
	RepositoryURL  *string  `json:"repositoryUrl,omitempty"`
	SourceURL      *string  `json:"sourceUrl,omitempty"`
	TargetAbi      *string  `json:"targetAbi,omitempty"`
	Timestamp      *string  `json:"timestamp,omitempty"`
	Version        *string  `json:"version,omitempty"`
}
