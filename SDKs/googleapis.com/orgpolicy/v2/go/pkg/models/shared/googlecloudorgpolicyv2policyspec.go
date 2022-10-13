package shared

type GoogleCloudOrgpolicyV2PolicySpec struct {
	Etag              *string                                      `json:"etag"`
	InheritFromParent *bool                                        `json:"inheritFromParent"`
	Reset             *bool                                        `json:"reset"`
	Rules             []GoogleCloudOrgpolicyV2PolicySpecPolicyRule `json:"rules"`
	UpdateTime        *string                                      `json:"updateTime"`
}
