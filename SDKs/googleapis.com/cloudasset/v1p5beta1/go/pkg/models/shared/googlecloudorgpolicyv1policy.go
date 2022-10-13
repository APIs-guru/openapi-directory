package shared

type GoogleCloudOrgpolicyV1Policy struct {
	BooleanPolicy  *GoogleCloudOrgpolicyV1BooleanPolicy `json:"booleanPolicy"`
	Constraint     *string                              `json:"constraint"`
	Etag           *string                              `json:"etag"`
	ListPolicy     *GoogleCloudOrgpolicyV1ListPolicy    `json:"listPolicy"`
	RestoreDefault map[string]interface{}               `json:"restoreDefault"`
	UpdateTime     *string                              `json:"updateTime"`
	Version        *int32                               `json:"version"`
}
