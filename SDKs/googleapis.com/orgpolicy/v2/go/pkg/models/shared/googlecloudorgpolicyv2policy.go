package shared

type GoogleCloudOrgpolicyV2Policy struct {
	Alternate *GoogleCloudOrgpolicyV2AlternatePolicySpec `json:"alternate"`
	Name      *string                                    `json:"name"`
	Spec      *GoogleCloudOrgpolicyV2PolicySpec          `json:"spec"`
}
