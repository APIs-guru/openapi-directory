package shared

type AccountsLinkRequest struct {
	Action                         *string                         `json:"action,omitempty"`
	ECommercePlatformLinkInfo      *ECommercePlatformLinkInfo      `json:"eCommercePlatformLinkInfo,omitempty"`
	LinkType                       *string                         `json:"linkType,omitempty"`
	LinkedAccountID                *string                         `json:"linkedAccountId,omitempty"`
	PaymentServiceProviderLinkInfo *PaymentServiceProviderLinkInfo `json:"paymentServiceProviderLinkInfo,omitempty"`
	Services                       []string                        `json:"services,omitempty"`
}
