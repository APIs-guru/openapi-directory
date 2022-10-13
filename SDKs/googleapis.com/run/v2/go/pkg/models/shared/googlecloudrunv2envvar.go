package shared

type GoogleCloudRunV2EnvVar struct {
	Name        *string                       `json:"name"`
	Value       *string                       `json:"value"`
	ValueSource *GoogleCloudRunV2EnvVarSource `json:"valueSource"`
}
