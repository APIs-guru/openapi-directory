package shared

// GoogleCloudChannelV1ListTransferableOffersRequest
// Request message for CloudChannelService.ListTransferableOffers
type GoogleCloudChannelV1ListTransferableOffersRequest struct {
	CloudIdentityID *string `json:"cloudIdentityId,omitempty"`
	CustomerName    *string `json:"customerName,omitempty"`
	LanguageCode    *string `json:"languageCode,omitempty"`
	PageSize        *int32  `json:"pageSize,omitempty"`
	PageToken       *string `json:"pageToken,omitempty"`
	Sku             *string `json:"sku,omitempty"`
}
