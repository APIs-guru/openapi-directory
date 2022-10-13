package shared

type GoogleCloudDatapipelinesV1LaunchTemplateParameters struct {
	Environment          *GoogleCloudDatapipelinesV1RuntimeEnvironment `json:"environment"`
	JobName              *string                                       `json:"jobName"`
	Parameters           map[string]string                             `json:"parameters"`
	TransformNameMapping map[string]string                             `json:"transformNameMapping"`
	Update               *bool                                         `json:"update"`
}
