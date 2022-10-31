package shared



type HeldDriveQuery struct {
    IncludeSharedDriveFiles *bool `json:"includeSharedDriveFiles,omitempty"`
    IncludeTeamDriveFiles *bool `json:"includeTeamDriveFiles,omitempty"`
    
}

