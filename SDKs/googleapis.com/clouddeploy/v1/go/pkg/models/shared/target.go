package shared



type Target struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    AnthosCluster *AnthosCluster `json:"anthosCluster,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ExecutionConfigs []ExecutionConfig `json:"executionConfigs,omitempty"`
    Gke *GkeCluster `json:"gke,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    RequireApproval *bool `json:"requireApproval,omitempty"`
    Run *CloudRunLocation `json:"run,omitempty"`
    TargetID *string `json:"targetId,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

