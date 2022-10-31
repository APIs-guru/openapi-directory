package shared



type GoogleCloudChannelV1ListTransferableOffersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TransferableOffers []GoogleCloudChannelV1TransferableOffer `json:"transferableOffers,omitempty"`
    
}

