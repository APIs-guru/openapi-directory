package shared

type GoogleCloudDatalabelingV1beta1OutputConfig struct {
	GcsDestination       *GoogleCloudDatalabelingV1beta1GcsDestination       `json:"gcsDestination,omitempty"`
	GcsFolderDestination *GoogleCloudDatalabelingV1beta1GcsFolderDestination `json:"gcsFolderDestination,omitempty"`
}
