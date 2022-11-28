package shared

// AutoscalingPolicy
// Describes an autoscaling policy for Dataproc cluster autoscaler.
type AutoscalingPolicy struct {
	BasicAlgorithm        *BasicAutoscalingAlgorithm            `json:"basicAlgorithm,omitempty"`
	ID                    *string                               `json:"id,omitempty"`
	Labels                map[string]string                     `json:"labels,omitempty"`
	Name                  *string                               `json:"name,omitempty"`
	SecondaryWorkerConfig *InstanceGroupAutoscalingPolicyConfig `json:"secondaryWorkerConfig,omitempty"`
	WorkerConfig          *InstanceGroupAutoscalingPolicyConfig `json:"workerConfig,omitempty"`
}

// AutoscalingPolicyInput
// Describes an autoscaling policy for Dataproc cluster autoscaler.
type AutoscalingPolicyInput struct {
	BasicAlgorithm        *BasicAutoscalingAlgorithm            `json:"basicAlgorithm,omitempty"`
	ID                    *string                               `json:"id,omitempty"`
	Labels                map[string]string                     `json:"labels,omitempty"`
	SecondaryWorkerConfig *InstanceGroupAutoscalingPolicyConfig `json:"secondaryWorkerConfig,omitempty"`
	WorkerConfig          *InstanceGroupAutoscalingPolicyConfig `json:"workerConfig,omitempty"`
}
