package shared

// PerProjectQuota
// Represents a set of quotas for a given project
type PerProjectQuota struct {
	Images     *Quota  `json:"Images,omitempty"`
	Iterations *Quota  `json:"Iterations,omitempty"`
	ProjectID  *string `json:"ProjectId,omitempty"`
	Tags       *Quota  `json:"Tags,omitempty"`
}
