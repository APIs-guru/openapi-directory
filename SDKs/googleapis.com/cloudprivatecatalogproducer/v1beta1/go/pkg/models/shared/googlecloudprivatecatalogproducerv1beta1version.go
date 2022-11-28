package shared

// GoogleCloudPrivatecatalogproducerV1beta1Version
// The producer representation of a version, which is a child resource under a
// `Product` with asset data.
type GoogleCloudPrivatecatalogproducerV1beta1Version struct {
	Asset         map[string]interface{} `json:"asset,omitempty"`
	CreateTime    *string                `json:"createTime,omitempty"`
	Description   *string                `json:"description,omitempty"`
	Name          *string                `json:"name,omitempty"`
	OriginalAsset map[string]interface{} `json:"originalAsset,omitempty"`
	UpdateTime    *string                `json:"updateTime,omitempty"`
}
