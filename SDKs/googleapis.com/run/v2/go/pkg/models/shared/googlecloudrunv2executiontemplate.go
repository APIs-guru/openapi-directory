package shared

type GoogleCloudRunV2ExecutionTemplate struct {
	Annotations map[string]string             `json:"annotations"`
	Labels      map[string]string             `json:"labels"`
	Parallelism *int32                        `json:"parallelism"`
	TaskCount   *int32                        `json:"taskCount"`
	Template    *GoogleCloudRunV2TaskTemplate `json:"template"`
}
