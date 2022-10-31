package shared



type Deployment struct {
    Description *string `json:"description,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    ID *string `json:"id,omitempty"`
    InsertTime *string `json:"insertTime,omitempty"`
    Labels []DeploymentLabelEntry `json:"labels,omitempty"`
    Manifest *string `json:"manifest,omitempty"`
    Name *string `json:"name,omitempty"`
    Operation *Operation `json:"operation,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Target *TargetConfiguration `json:"target,omitempty"`
    Update *DeploymentUpdate `json:"update,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

