package shared

// GoogleCloudPrivatecatalogproducerV1beta1Product
// The producer representation of a product which is a child resource of
// `Catalog` with display metadata and a list of `Version` resources.
type GoogleCloudPrivatecatalogproducerV1beta1Product struct {
	AssetType       *string                `json:"assetType,omitempty"`
	CreateTime      *string                `json:"createTime,omitempty"`
	DisplayMetadata map[string]interface{} `json:"displayMetadata,omitempty"`
	IconURI         *string                `json:"iconUri,omitempty"`
	Name            *string                `json:"name,omitempty"`
	UpdateTime      *string                `json:"updateTime,omitempty"`
}
