package shared

// GoogleCloudChannelV1ListTransferableSkusResponse
// Response message for CloudChannelService.ListTransferableSkus.
type GoogleCloudChannelV1ListTransferableSkusResponse struct {
	NextPageToken    *string                               `json:"nextPageToken,omitempty"`
	TransferableSkus []GoogleCloudChannelV1TransferableSku `json:"transferableSkus,omitempty"`
}
