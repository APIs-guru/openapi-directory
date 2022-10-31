package shared



type RunBuildTriggerRequest struct {
    ProjectID *string `json:"projectId,omitempty"`
    Source *RepoSource `json:"source,omitempty"`
    TriggerID *string `json:"triggerId,omitempty"`
    
}

