package shared

// HeldDriveQuery
// Options for Drive holds.
type HeldDriveQuery struct {
	IncludeSharedDriveFiles *bool `json:"includeSharedDriveFiles,omitempty"`
	IncludeTeamDriveFiles   *bool `json:"includeTeamDriveFiles,omitempty"`
}
