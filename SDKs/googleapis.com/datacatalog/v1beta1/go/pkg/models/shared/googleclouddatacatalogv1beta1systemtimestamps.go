package shared

// GoogleCloudDatacatalogV1beta1SystemTimestamps
// Timestamps about this resource according to a particular system.
type GoogleCloudDatacatalogV1beta1SystemTimestamps struct {
	CreateTime *string `json:"createTime,omitempty"`
	ExpireTime *string `json:"expireTime,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}

// GoogleCloudDatacatalogV1beta1SystemTimestampsInput
// Timestamps about this resource according to a particular system.
type GoogleCloudDatacatalogV1beta1SystemTimestampsInput struct {
	CreateTime *string `json:"createTime,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
