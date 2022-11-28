package shared

// GoogleCloudRetailV2betaProductDetailInput
// Detailed product information associated with a user event.
type GoogleCloudRetailV2betaProductDetailInput struct {
	Product  *GoogleCloudRetailV2betaProductInput `json:"product,omitempty"`
	Quantity *int32                               `json:"quantity,omitempty"`
}

// GoogleCloudRetailV2betaProductDetail
// Detailed product information associated with a user event.
type GoogleCloudRetailV2betaProductDetail struct {
	Product  *GoogleCloudRetailV2betaProduct `json:"product,omitempty"`
	Quantity *int32                          `json:"quantity,omitempty"`
}
