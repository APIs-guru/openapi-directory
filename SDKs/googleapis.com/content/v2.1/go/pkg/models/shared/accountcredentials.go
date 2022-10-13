package shared

type AccountCredentialsPurposeEnum string

const (
	AccountCredentialsPurposeEnumAccountCredentialsPurposeUnspecified AccountCredentialsPurposeEnum = "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED"
	AccountCredentialsPurposeEnumShopifyOrderManagement               AccountCredentialsPurposeEnum = "SHOPIFY_ORDER_MANAGEMENT"
	AccountCredentialsPurposeEnumShopifyIntegration                   AccountCredentialsPurposeEnum = "SHOPIFY_INTEGRATION"
)

type AccountCredentials struct {
	AccessToken *string                        `json:"accessToken"`
	ExpiresIn   *string                        `json:"expiresIn"`
	Purpose     *AccountCredentialsPurposeEnum `json:"purpose"`
}
