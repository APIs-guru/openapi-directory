package shared

type GoogleCloudDatapipelinesV1Workload struct {
	DataflowFlexTemplateRequest   *GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest `json:"dataflowFlexTemplateRequest"`
	DataflowLaunchTemplateRequest *GoogleCloudDatapipelinesV1LaunchTemplateRequest     `json:"dataflowLaunchTemplateRequest"`
}
