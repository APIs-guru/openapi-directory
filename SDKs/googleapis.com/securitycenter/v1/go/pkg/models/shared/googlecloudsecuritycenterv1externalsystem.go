package shared

type GoogleCloudSecuritycenterV1ExternalSystem struct {
	Assignees                []string `json:"assignees,omitempty"`
	ExternalSystemUpdateTime *string  `json:"externalSystemUpdateTime,omitempty"`
	ExternalUID              *string  `json:"externalUid,omitempty"`
	Name                     *string  `json:"name,omitempty"`
	Status                   *string  `json:"status,omitempty"`
}
