package shared



type GoogleCloudDatapipelinesV1DataflowJobDetails struct {
    CurrentWorkers *int32 `json:"currentWorkers,omitempty"`
    ResourceInfo map[string]float64 `json:"resourceInfo,omitempty"`
    SdkVersion *GoogleCloudDatapipelinesV1SdkVersion `json:"sdkVersion,omitempty"`
    
}

