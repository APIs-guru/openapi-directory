package shared

// GoogleCloudRetailV2alphaPurgeProductsRequest
// Request message for PurgeProducts method.
type GoogleCloudRetailV2alphaPurgeProductsRequest struct {
	Filter *string `json:"filter,omitempty"`
	Force  *bool   `json:"force,omitempty"`
}
