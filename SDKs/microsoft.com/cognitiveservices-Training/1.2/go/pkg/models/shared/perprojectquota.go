package shared

type PerProjectQuota struct {
	Images     *Quota  `json:"Images"`
	Iterations *Quota  `json:"Iterations"`
	ProjectID  *string `json:"ProjectId"`
	Tags       *Quota  `json:"Tags"`
}
