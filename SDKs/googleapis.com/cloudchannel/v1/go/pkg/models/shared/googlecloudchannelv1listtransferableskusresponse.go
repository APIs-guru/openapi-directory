package shared



type GoogleCloudChannelV1ListTransferableSkusResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TransferableSkus []GoogleCloudChannelV1TransferableSku `json:"transferableSkus,omitempty"`
    
}

