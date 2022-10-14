package shared

type Asset struct {
	CreateTime               *string                                        `json:"createTime,omitempty"`
	Name                     *string                                        `json:"name,omitempty"`
	ResourceProperties       map[string]interface{}                         `json:"resourceProperties,omitempty"`
	SecurityCenterProperties *SecurityCenterProperties                      `json:"securityCenterProperties,omitempty"`
	SecurityMarks            *GoogleCloudSecuritycenterV1beta1SecurityMarks `json:"securityMarks,omitempty"`
	UpdateTime               *string                                        `json:"updateTime,omitempty"`
}
