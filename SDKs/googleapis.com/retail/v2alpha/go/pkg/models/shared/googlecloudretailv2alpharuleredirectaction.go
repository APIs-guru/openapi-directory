package shared

// GoogleCloudRetailV2alphaRuleRedirectAction
// Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.
type GoogleCloudRetailV2alphaRuleRedirectAction struct {
	RedirectURI *string `json:"redirectUri,omitempty"`
}
