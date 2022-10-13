package shared

type HeldDriveQuery struct {
	IncludeSharedDriveFiles *bool `json:"includeSharedDriveFiles"`
	IncludeTeamDriveFiles   *bool `json:"includeTeamDriveFiles"`
}
