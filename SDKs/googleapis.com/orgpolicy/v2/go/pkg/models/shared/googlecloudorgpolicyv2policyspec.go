package shared

type GoogleCloudOrgpolicyV2PolicySpec struct {
	Etag              *string                                      `json:"etag,omitempty"`
	InheritFromParent *bool                                        `json:"inheritFromParent,omitempty"`
	Reset             *bool                                        `json:"reset,omitempty"`
	Rules             []GoogleCloudOrgpolicyV2PolicySpecPolicyRule `json:"rules,omitempty"`
	UpdateTime        *string                                      `json:"updateTime,omitempty"`
}
