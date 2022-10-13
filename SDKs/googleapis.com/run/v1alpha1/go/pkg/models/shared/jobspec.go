package shared

type JobSpec struct {
	ActiveDeadlineSeconds   *string               `json:"activeDeadlineSeconds"`
	BackoffLimit            *int32                `json:"backoffLimit"`
	Completions             *int32                `json:"completions"`
	Parallelism             *int32                `json:"parallelism"`
	Template                *InstanceTemplateSpec `json:"template"`
	TTLSecondsAfterFinished *int32                `json:"ttlSecondsAfterFinished"`
}
