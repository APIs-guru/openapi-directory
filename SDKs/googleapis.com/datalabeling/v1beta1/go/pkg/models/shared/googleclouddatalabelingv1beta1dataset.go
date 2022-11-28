package shared

// GoogleCloudDatalabelingV1beta1Dataset
// Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
type GoogleCloudDatalabelingV1beta1Dataset struct {
	BlockingResources []string                                    `json:"blockingResources,omitempty"`
	CreateTime        *string                                     `json:"createTime,omitempty"`
	DataItemCount     *string                                     `json:"dataItemCount,omitempty"`
	Description       *string                                     `json:"description,omitempty"`
	DisplayName       *string                                     `json:"displayName,omitempty"`
	InputConfigs      []GoogleCloudDatalabelingV1beta1InputConfig `json:"inputConfigs,omitempty"`
	LastMigrateTime   *string                                     `json:"lastMigrateTime,omitempty"`
	Name              *string                                     `json:"name,omitempty"`
}
