package shared



type AutoscalingPolicy struct {
    BasicAlgorithm *BasicAutoscalingAlgorithm `json:"basicAlgorithm,omitempty"`
    ID *string `json:"id,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    SecondaryWorkerConfig *InstanceGroupAutoscalingPolicyConfig `json:"secondaryWorkerConfig,omitempty"`
    WorkerConfig *InstanceGroupAutoscalingPolicyConfig `json:"workerConfig,omitempty"`
    
}

