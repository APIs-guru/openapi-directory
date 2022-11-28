package shared

// GoogleCloudChannelV1TransferableSku
// TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
type GoogleCloudChannelV1TransferableSku struct {
	LegacySku           *GoogleCloudChannelV1Sku                 `json:"legacySku,omitempty"`
	Sku                 *GoogleCloudChannelV1Sku                 `json:"sku,omitempty"`
	TransferEligibility *GoogleCloudChannelV1TransferEligibility `json:"transferEligibility,omitempty"`
}
