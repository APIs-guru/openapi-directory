package shared

// GoogleCloudDatacatalogV1SystemTimestamps
// Timestamps associated with this resource in a particular system.
type GoogleCloudDatacatalogV1SystemTimestamps struct {
	CreateTime *string `json:"createTime,omitempty"`
	ExpireTime *string `json:"expireTime,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}

// GoogleCloudDatacatalogV1SystemTimestampsInput
// Timestamps associated with this resource in a particular system.
type GoogleCloudDatacatalogV1SystemTimestampsInput struct {
	CreateTime *string `json:"createTime,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
