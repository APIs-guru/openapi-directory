package shared

type Asset struct {
	CreateTime               *string                                        `json:"createTime"`
	Name                     *string                                        `json:"name"`
	ResourceProperties       map[string]interface{}                         `json:"resourceProperties"`
	SecurityCenterProperties *SecurityCenterProperties                      `json:"securityCenterProperties"`
	SecurityMarks            *GoogleCloudSecuritycenterV1beta1SecurityMarks `json:"securityMarks"`
	UpdateTime               *string                                        `json:"updateTime"`
}
