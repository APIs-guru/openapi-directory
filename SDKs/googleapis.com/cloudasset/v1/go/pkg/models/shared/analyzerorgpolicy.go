package shared

// AnalyzerOrgPolicy
// This organization policy message is a modified version of the one defined in the OrgPolicy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose.
type AnalyzerOrgPolicy struct {
	AppliedResource   *string                  `json:"appliedResource,omitempty"`
	AttachedResource  *string                  `json:"attachedResource,omitempty"`
	InheritFromParent *bool                    `json:"inheritFromParent,omitempty"`
	Reset             *bool                    `json:"reset,omitempty"`
	Rules             []GoogleCloudAssetV1Rule `json:"rules,omitempty"`
}
