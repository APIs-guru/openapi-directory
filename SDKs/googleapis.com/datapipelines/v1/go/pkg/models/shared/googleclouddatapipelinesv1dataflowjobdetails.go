package shared

type GoogleCloudDatapipelinesV1DataflowJobDetails struct {
	CurrentWorkers *int32                                `json:"currentWorkers"`
	ResourceInfo   map[string]float64                    `json:"resourceInfo"`
	SdkVersion     *GoogleCloudDatapipelinesV1SdkVersion `json:"sdkVersion"`
}
