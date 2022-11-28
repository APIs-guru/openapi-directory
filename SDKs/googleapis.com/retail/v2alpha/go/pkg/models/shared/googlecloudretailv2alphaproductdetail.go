package shared

// GoogleCloudRetailV2alphaProductDetail
// Detailed product information associated with a user event.
type GoogleCloudRetailV2alphaProductDetail struct {
	Product  *GoogleCloudRetailV2alphaProduct `json:"product,omitempty"`
	Quantity *int32                           `json:"quantity,omitempty"`
}

// GoogleCloudRetailV2alphaProductDetailInput
// Detailed product information associated with a user event.
type GoogleCloudRetailV2alphaProductDetailInput struct {
	Product  *GoogleCloudRetailV2alphaProductInput `json:"product,omitempty"`
	Quantity *int32                                `json:"quantity,omitempty"`
}
