package shared

type JobStatus struct {
	Active             *int32           `json:"active,omitempty"`
	CompletionTime     *string          `json:"completionTime,omitempty"`
	Conditions         []JobCondition   `json:"conditions,omitempty"`
	Failed             *int32           `json:"failed,omitempty"`
	ImageDigest        *string          `json:"imageDigest,omitempty"`
	Instances          []InstanceStatus `json:"instances,omitempty"`
	ObservedGeneration *int32           `json:"observedGeneration,omitempty"`
	StartTime          *string          `json:"startTime,omitempty"`
	Succeeded          *int32           `json:"succeeded,omitempty"`
}
