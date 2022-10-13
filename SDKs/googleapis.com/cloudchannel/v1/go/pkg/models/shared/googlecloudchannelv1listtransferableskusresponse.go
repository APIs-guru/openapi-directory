package shared

type GoogleCloudChannelV1ListTransferableSkusResponse struct {
	NextPageToken    *string                               `json:"nextPageToken"`
	TransferableSkus []GoogleCloudChannelV1TransferableSku `json:"transferableSkus"`
}
