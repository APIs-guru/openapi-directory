package shared



type GoogleCloudDatalabelingV1beta1Dataset struct {
    BlockingResources []string `json:"blockingResources,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DataItemCount *string `json:"dataItemCount,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    InputConfigs []GoogleCloudDatalabelingV1beta1InputConfig `json:"inputConfigs,omitempty"`
    LastMigrateTime *string `json:"lastMigrateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

