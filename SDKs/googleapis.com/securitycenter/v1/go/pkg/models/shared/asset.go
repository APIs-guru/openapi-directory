package shared

type Asset struct {
	CanonicalName            *string                   `json:"canonicalName"`
	CreateTime               *string                   `json:"createTime"`
	IamPolicy                *IamPolicy                `json:"iamPolicy"`
	Name                     *string                   `json:"name"`
	ResourceProperties       map[string]interface{}    `json:"resourceProperties"`
	SecurityCenterProperties *SecurityCenterProperties `json:"securityCenterProperties"`
	SecurityMarks            *SecurityMarks            `json:"securityMarks"`
	UpdateTime               *string                   `json:"updateTime"`
}
