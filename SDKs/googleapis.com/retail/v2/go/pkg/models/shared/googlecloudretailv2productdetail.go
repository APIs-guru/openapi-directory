package shared

// GoogleCloudRetailV2ProductDetail
// Detailed product information associated with a user event.
type GoogleCloudRetailV2ProductDetail struct {
	Product  *GoogleCloudRetailV2Product `json:"product,omitempty"`
	Quantity *int32                      `json:"quantity,omitempty"`
}

// GoogleCloudRetailV2ProductDetailInput
// Detailed product information associated with a user event.
type GoogleCloudRetailV2ProductDetailInput struct {
	Product  *GoogleCloudRetailV2ProductInput `json:"product,omitempty"`
	Quantity *int32                           `json:"quantity,omitempty"`
}
