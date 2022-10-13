package shared

type GoogleCloudSecuritycenterV1ExternalSystem struct {
	Assignees                []string `json:"assignees"`
	ExternalSystemUpdateTime *string  `json:"externalSystemUpdateTime"`
	ExternalUID              *string  `json:"externalUid"`
	Name                     *string  `json:"name"`
	Status                   *string  `json:"status"`
}
