package shared

type JobStatus struct {
	Active             *int32           `json:"active"`
	CompletionTime     *string          `json:"completionTime"`
	Conditions         []JobCondition   `json:"conditions"`
	Failed             *int32           `json:"failed"`
	ImageDigest        *string          `json:"imageDigest"`
	Instances          []InstanceStatus `json:"instances"`
	ObservedGeneration *int32           `json:"observedGeneration"`
	StartTime          *string          `json:"startTime"`
	Succeeded          *int32           `json:"succeeded"`
}
