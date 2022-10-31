package shared



type CertificateMap struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    GclbTargets []GclbTarget `json:"gclbTargets,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

