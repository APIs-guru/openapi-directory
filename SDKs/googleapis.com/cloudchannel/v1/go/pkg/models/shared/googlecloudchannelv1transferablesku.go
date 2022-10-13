package shared

type GoogleCloudChannelV1TransferableSku struct {
	LegacySku           *GoogleCloudChannelV1Sku                 `json:"legacySku"`
	Sku                 *GoogleCloudChannelV1Sku                 `json:"sku"`
	TransferEligibility *GoogleCloudChannelV1TransferEligibility `json:"transferEligibility"`
}
