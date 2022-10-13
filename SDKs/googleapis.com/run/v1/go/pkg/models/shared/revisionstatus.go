package shared

type RevisionStatus struct {
	Conditions         []GoogleCloudRunV1Condition `json:"conditions"`
	ImageDigest        *string                     `json:"imageDigest"`
	LogURL             *string                     `json:"logUrl"`
	ObservedGeneration *int32                      `json:"observedGeneration"`
	ServiceName        *string                     `json:"serviceName"`
}
