package shared

type GoogleCloudChannelV1ListTransferableOffersRequest struct {
	CloudIdentityID *string `json:"cloudIdentityId"`
	CustomerName    *string `json:"customerName"`
	LanguageCode    *string `json:"languageCode"`
	PageSize        *int32  `json:"pageSize"`
	PageToken       *string `json:"pageToken"`
	Sku             *string `json:"sku"`
}
