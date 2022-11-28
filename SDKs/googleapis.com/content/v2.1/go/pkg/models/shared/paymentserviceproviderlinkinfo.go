package shared

// PaymentServiceProviderLinkInfo
// Additional information required for PAYMENT_SERVICE_PROVIDER link type.
type PaymentServiceProviderLinkInfo struct {
	ExternalAccountBusinessCountry *string `json:"externalAccountBusinessCountry,omitempty"`
	ExternalAccountID              *string `json:"externalAccountId,omitempty"`
}
