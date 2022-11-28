package shared

// GoogleIamV2betaPolicyInput
// Data for an IAM policy.
type GoogleIamV2betaPolicyInput struct {
	Annotations map[string]string           `json:"annotations,omitempty"`
	DisplayName *string                     `json:"displayName,omitempty"`
	Etag        *string                     `json:"etag,omitempty"`
	Name        *string                     `json:"name,omitempty"`
	Rules       []GoogleIamV2betaPolicyRule `json:"rules,omitempty"`
	UID         *string                     `json:"uid,omitempty"`
}

// GoogleIamV2betaPolicy
// Data for an IAM policy.
type GoogleIamV2betaPolicy struct {
	Annotations map[string]string           `json:"annotations,omitempty"`
	CreateTime  *string                     `json:"createTime,omitempty"`
	DeleteTime  *string                     `json:"deleteTime,omitempty"`
	DisplayName *string                     `json:"displayName,omitempty"`
	Etag        *string                     `json:"etag,omitempty"`
	Kind        *string                     `json:"kind,omitempty"`
	Name        *string                     `json:"name,omitempty"`
	Rules       []GoogleIamV2betaPolicyRule `json:"rules,omitempty"`
	UID         *string                     `json:"uid,omitempty"`
	UpdateTime  *string                     `json:"updateTime,omitempty"`
}
