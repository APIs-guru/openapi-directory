package shared

// Asset
// Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
type Asset struct {
	CreateTime               *string                                        `json:"createTime,omitempty"`
	Name                     *string                                        `json:"name,omitempty"`
	ResourceProperties       map[string]interface{}                         `json:"resourceProperties,omitempty"`
	SecurityCenterProperties *SecurityCenterProperties                      `json:"securityCenterProperties,omitempty"`
	SecurityMarks            *GoogleCloudSecuritycenterV1beta1SecurityMarks `json:"securityMarks,omitempty"`
	UpdateTime               *string                                        `json:"updateTime,omitempty"`
}
