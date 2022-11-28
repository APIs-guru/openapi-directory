package shared

// GoogleCloudRetailV2betaRuleRedirectAction
// Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.
type GoogleCloudRetailV2betaRuleRedirectAction struct {
	RedirectURI *string `json:"redirectUri,omitempty"`
}
