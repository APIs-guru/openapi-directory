package shared

type Asset struct {
	CanonicalName            *string                   `json:"canonicalName,omitempty"`
	CreateTime               *string                   `json:"createTime,omitempty"`
	IamPolicy                *IamPolicy                `json:"iamPolicy,omitempty"`
	Name                     *string                   `json:"name,omitempty"`
	ResourceProperties       map[string]interface{}    `json:"resourceProperties,omitempty"`
	SecurityCenterProperties *SecurityCenterProperties `json:"securityCenterProperties,omitempty"`
	SecurityMarks            *SecurityMarks            `json:"securityMarks,omitempty"`
	UpdateTime               *string                   `json:"updateTime,omitempty"`
}
