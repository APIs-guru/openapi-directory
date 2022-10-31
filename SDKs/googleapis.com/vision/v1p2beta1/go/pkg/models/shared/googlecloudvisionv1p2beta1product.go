package shared

type GoogleCloudVisionV1p2beta1Product struct {
	Description     *string                                     `json:"description,omitempty"`
	DisplayName     *string                                     `json:"displayName,omitempty"`
	Name            *string                                     `json:"name,omitempty"`
	ProductCategory *string                                     `json:"productCategory,omitempty"`
	ProductLabels   []GoogleCloudVisionV1p2beta1ProductKeyValue `json:"productLabels,omitempty"`
}
