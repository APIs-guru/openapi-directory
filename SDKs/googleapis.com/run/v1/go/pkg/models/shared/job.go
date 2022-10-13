package shared

type Job struct {
	APIVersion *string     `json:"apiVersion"`
	Kind       *string     `json:"kind"`
	Metadata   *ObjectMeta `json:"metadata"`
	Spec       *JobSpec    `json:"spec"`
	Status     *JobStatus  `json:"status"`
}
