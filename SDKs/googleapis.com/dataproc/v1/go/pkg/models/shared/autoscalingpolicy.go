package shared

type AutoscalingPolicy struct {
	BasicAlgorithm        *BasicAutoscalingAlgorithm            `json:"basicAlgorithm"`
	ID                    *string                               `json:"id"`
	Labels                map[string]string                     `json:"labels"`
	Name                  *string                               `json:"name"`
	SecondaryWorkerConfig *InstanceGroupAutoscalingPolicyConfig `json:"secondaryWorkerConfig"`
	WorkerConfig          *InstanceGroupAutoscalingPolicyConfig `json:"workerConfig"`
}
