package shared

// GoogleCloudSecuritycenterV1ExternalSystem
// Representation of third party SIEM/SOAR fields within SCC.
type GoogleCloudSecuritycenterV1ExternalSystem struct {
	Assignees                []string `json:"assignees,omitempty"`
	ExternalSystemUpdateTime *string  `json:"externalSystemUpdateTime,omitempty"`
	ExternalUID              *string  `json:"externalUid,omitempty"`
	Name                     *string  `json:"name,omitempty"`
	Status                   *string  `json:"status,omitempty"`
}
