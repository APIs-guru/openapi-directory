package shared

// GoogleCloudDiscoveryengineV1betaDocumentInfo
// Detailed document information associated with a user event.
type GoogleCloudDiscoveryengineV1betaDocumentInfo struct {
	ID           *string  `json:"id,omitempty"`
	Name         *string  `json:"name,omitempty"`
	PromotionIds []string `json:"promotionIds,omitempty"`
	Quantity     *int32   `json:"quantity,omitempty"`
}
