package shared



type GoogleCloudChannelV1TransferableSku struct {
    LegacySku *GoogleCloudChannelV1Sku `json:"legacySku,omitempty"`
    Sku *GoogleCloudChannelV1Sku `json:"sku,omitempty"`
    TransferEligibility *GoogleCloudChannelV1TransferEligibility `json:"transferEligibility,omitempty"`
    
}

