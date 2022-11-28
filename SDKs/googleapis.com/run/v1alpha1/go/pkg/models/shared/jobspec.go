package shared

// JobSpec
// JobSpec describes how the job execution will look like.
type JobSpec struct {
	ActiveDeadlineSeconds   *string               `json:"activeDeadlineSeconds,omitempty"`
	BackoffLimit            *int32                `json:"backoffLimit,omitempty"`
	Completions             *int32                `json:"completions,omitempty"`
	Parallelism             *int32                `json:"parallelism,omitempty"`
	Template                *InstanceTemplateSpec `json:"template,omitempty"`
	TTLSecondsAfterFinished *int32                `json:"ttlSecondsAfterFinished,omitempty"`
}
