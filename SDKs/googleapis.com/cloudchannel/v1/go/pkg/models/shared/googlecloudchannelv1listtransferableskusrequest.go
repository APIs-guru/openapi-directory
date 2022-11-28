package shared

// GoogleCloudChannelV1ListTransferableSkusRequest
// Request message for CloudChannelService.ListTransferableSkus
type GoogleCloudChannelV1ListTransferableSkusRequest struct {
	AuthToken       *string `json:"authToken,omitempty"`
	CloudIdentityID *string `json:"cloudIdentityId,omitempty"`
	CustomerName    *string `json:"customerName,omitempty"`
	LanguageCode    *string `json:"languageCode,omitempty"`
	PageSize        *int32  `json:"pageSize,omitempty"`
	PageToken       *string `json:"pageToken,omitempty"`
}
