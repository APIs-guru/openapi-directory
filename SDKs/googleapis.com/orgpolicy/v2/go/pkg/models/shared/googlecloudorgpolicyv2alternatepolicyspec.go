package shared

type GoogleCloudOrgpolicyV2AlternatePolicySpec struct {
	Launch *string                           `json:"launch"`
	Spec   *GoogleCloudOrgpolicyV2PolicySpec `json:"spec"`
}
