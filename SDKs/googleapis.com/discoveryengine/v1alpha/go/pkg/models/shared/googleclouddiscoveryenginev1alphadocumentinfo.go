package shared

// GoogleCloudDiscoveryengineV1alphaDocumentInfo
// Detailed document information associated with a user event.
type GoogleCloudDiscoveryengineV1alphaDocumentInfo struct {
	ID           *string  `json:"id,omitempty"`
	Name         *string  `json:"name,omitempty"`
	PromotionIds []string `json:"promotionIds,omitempty"`
	Quantity     *int32   `json:"quantity,omitempty"`
}
