package shared

type GoogleCloudChannelV1ListTransferableSkusRequest struct {
	AuthToken       *string `json:"authToken"`
	CloudIdentityID *string `json:"cloudIdentityId"`
	CustomerName    *string `json:"customerName"`
	LanguageCode    *string `json:"languageCode"`
	PageSize        *int32  `json:"pageSize"`
	PageToken       *string `json:"pageToken"`
}
