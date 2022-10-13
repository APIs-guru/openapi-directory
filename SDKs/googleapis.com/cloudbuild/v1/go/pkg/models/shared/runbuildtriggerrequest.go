package shared

type RunBuildTriggerRequest struct {
	ProjectID *string     `json:"projectId"`
	Source    *RepoSource `json:"source"`
	TriggerID *string     `json:"triggerId"`
}
