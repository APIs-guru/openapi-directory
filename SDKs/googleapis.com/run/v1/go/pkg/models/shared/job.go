package shared

// Job
// Job represents the configuration of a single job, which references a container image which is run to completion.
type Job struct {
	APIVersion *string     `json:"apiVersion,omitempty"`
	Kind       *string     `json:"kind,omitempty"`
	Metadata   *ObjectMeta `json:"metadata,omitempty"`
	Spec       *JobSpec    `json:"spec,omitempty"`
	Status     *JobStatus  `json:"status,omitempty"`
}
