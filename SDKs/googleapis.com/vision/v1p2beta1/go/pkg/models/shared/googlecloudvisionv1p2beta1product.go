package shared

type GoogleCloudVisionV1p2beta1Product struct {
	Description     *string                                     `json:"description"`
	DisplayName     *string                                     `json:"displayName"`
	Name            *string                                     `json:"name"`
	ProductCategory *string                                     `json:"productCategory"`
	ProductLabels   []GoogleCloudVisionV1p2beta1ProductKeyValue `json:"productLabels"`
}
