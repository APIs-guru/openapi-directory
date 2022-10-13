package shared

type SupportedRuntimeFeatures struct {
	ActionApis *bool `json:"actionApis"`
	EntityApis *bool `json:"entityApis"`
	SQLQuery   *bool `json:"sqlQuery"`
}
