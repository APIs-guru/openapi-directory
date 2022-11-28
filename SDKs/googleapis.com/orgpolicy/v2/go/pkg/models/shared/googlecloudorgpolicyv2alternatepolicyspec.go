package shared

// GoogleCloudOrgpolicyV2AlternatePolicySpec
// Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
type GoogleCloudOrgpolicyV2AlternatePolicySpec struct {
	Launch *string                           `json:"launch,omitempty"`
	Spec   *GoogleCloudOrgpolicyV2PolicySpec `json:"spec,omitempty"`
}

// GoogleCloudOrgpolicyV2AlternatePolicySpecInput
// Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
type GoogleCloudOrgpolicyV2AlternatePolicySpecInput struct {
	Launch *string                                `json:"launch,omitempty"`
	Spec   *GoogleCloudOrgpolicyV2PolicySpecInput `json:"spec,omitempty"`
}
