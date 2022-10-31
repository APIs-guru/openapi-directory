package shared



type Pool struct {
    AutoRestart *bool `json:"autoRestart,omitempty"`
    BaseInstanceName *string `json:"baseInstanceName,omitempty"`
    CurrentNumReplicas *int32 `json:"currentNumReplicas,omitempty"`
    Description *string `json:"description,omitempty"`
    HealthChecks []HealthCheck `json:"healthChecks,omitempty"`
    InitialNumReplicas *int32 `json:"initialNumReplicas,omitempty"`
    Labels []Label `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    NumReplicas *int32 `json:"numReplicas,omitempty"`
    ResourceViews []string `json:"resourceViews,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    TargetPool *string `json:"targetPool,omitempty"`
    TargetPools []string `json:"targetPools,omitempty"`
    Template *Template `json:"template,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

