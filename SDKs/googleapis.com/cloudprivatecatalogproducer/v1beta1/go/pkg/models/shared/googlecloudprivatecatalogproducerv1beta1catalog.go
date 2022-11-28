package shared

// GoogleCloudPrivatecatalogproducerV1beta1Catalog
// The producer representation of a catalog which is a curated collection of
// solutions that can be managed, controlled, and shared by cloud admins.
type GoogleCloudPrivatecatalogproducerV1beta1Catalog struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	Parent      *string `json:"parent,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}
