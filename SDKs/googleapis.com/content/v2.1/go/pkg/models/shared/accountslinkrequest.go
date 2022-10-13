package shared

type AccountsLinkRequest struct {
	Action                         *string                         `json:"action"`
	ECommercePlatformLinkInfo      *ECommercePlatformLinkInfo      `json:"eCommercePlatformLinkInfo"`
	LinkType                       *string                         `json:"linkType"`
	LinkedAccountID                *string                         `json:"linkedAccountId"`
	PaymentServiceProviderLinkInfo *PaymentServiceProviderLinkInfo `json:"paymentServiceProviderLinkInfo"`
	Services                       []string                        `json:"services"`
}
