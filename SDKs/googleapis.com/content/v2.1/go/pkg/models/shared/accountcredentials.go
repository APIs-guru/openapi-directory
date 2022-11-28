package shared

type AccountCredentialsPurposeEnum string

const (
	AccountCredentialsPurposeEnumAccountCredentialsPurposeUnspecified AccountCredentialsPurposeEnum = "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED"
	AccountCredentialsPurposeEnumShopifyOrderManagement               AccountCredentialsPurposeEnum = "SHOPIFY_ORDER_MANAGEMENT"
	AccountCredentialsPurposeEnumShopifyIntegration                   AccountCredentialsPurposeEnum = "SHOPIFY_INTEGRATION"
)

// AccountCredentials
// Credentials allowing Google to call a partner's API on behalf of a merchant.
type AccountCredentials struct {
	AccessToken *string                        `json:"accessToken,omitempty"`
	ExpiresIn   *string                        `json:"expiresIn,omitempty"`
	Purpose     *AccountCredentialsPurposeEnum `json:"purpose,omitempty"`
}
