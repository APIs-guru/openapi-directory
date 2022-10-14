package shared

type GoogleCloudOrgpolicyV1Policy struct {
	BooleanPolicy  *GoogleCloudOrgpolicyV1BooleanPolicy `json:"booleanPolicy,omitempty"`
	Constraint     *string                              `json:"constraint,omitempty"`
	Etag           *string                              `json:"etag,omitempty"`
	ListPolicy     *GoogleCloudOrgpolicyV1ListPolicy    `json:"listPolicy,omitempty"`
	RestoreDefault map[string]interface{}               `json:"restoreDefault,omitempty"`
	UpdateTime     *string                              `json:"updateTime,omitempty"`
	Version        *int32                               `json:"version,omitempty"`
}
