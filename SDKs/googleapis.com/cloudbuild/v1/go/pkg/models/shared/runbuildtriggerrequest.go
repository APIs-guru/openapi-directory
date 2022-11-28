package shared

// RunBuildTriggerRequest
// Specifies a build trigger to run and the source to use.
type RunBuildTriggerRequest struct {
	ProjectID *string     `json:"projectId,omitempty"`
	Source    *RepoSource `json:"source,omitempty"`
	TriggerID *string     `json:"triggerId,omitempty"`
}
