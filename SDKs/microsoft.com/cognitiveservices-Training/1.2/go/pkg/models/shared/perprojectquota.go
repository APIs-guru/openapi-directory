package shared

type PerProjectQuota struct {
	Images     *Quota  `json:"Images,omitempty"`
	Iterations *Quota  `json:"Iterations,omitempty"`
	ProjectID  *string `json:"ProjectId,omitempty"`
	Tags       *Quota  `json:"Tags,omitempty"`
}
