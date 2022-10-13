package shared

type GoogleCloudRunV2RevisionScaling struct {
	MaxInstanceCount *int32 `json:"maxInstanceCount"`
	MinInstanceCount *int32 `json:"minInstanceCount"`
}
