package shared

// GoogleCloudOrgpolicyV2PolicySpecInput
// Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
type GoogleCloudOrgpolicyV2PolicySpecInput struct {
	Etag              *string                                      `json:"etag,omitempty"`
	InheritFromParent *bool                                        `json:"inheritFromParent,omitempty"`
	Reset             *bool                                        `json:"reset,omitempty"`
	Rules             []GoogleCloudOrgpolicyV2PolicySpecPolicyRule `json:"rules,omitempty"`
}

// GoogleCloudOrgpolicyV2PolicySpec
// Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
type GoogleCloudOrgpolicyV2PolicySpec struct {
	Etag              *string                                      `json:"etag,omitempty"`
	InheritFromParent *bool                                        `json:"inheritFromParent,omitempty"`
	Reset             *bool                                        `json:"reset,omitempty"`
	Rules             []GoogleCloudOrgpolicyV2PolicySpecPolicyRule `json:"rules,omitempty"`
	UpdateTime        *string                                      `json:"updateTime,omitempty"`
}
