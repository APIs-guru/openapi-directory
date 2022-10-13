package shared

type GoogleCloudDatalabelingV1beta1Dataset struct {
	BlockingResources []string                                    `json:"blockingResources"`
	CreateTime        *string                                     `json:"createTime"`
	DataItemCount     *string                                     `json:"dataItemCount"`
	Description       *string                                     `json:"description"`
	DisplayName       *string                                     `json:"displayName"`
	InputConfigs      []GoogleCloudDatalabelingV1beta1InputConfig `json:"inputConfigs"`
	LastMigrateTime   *string                                     `json:"lastMigrateTime"`
	Name              *string                                     `json:"name"`
}
