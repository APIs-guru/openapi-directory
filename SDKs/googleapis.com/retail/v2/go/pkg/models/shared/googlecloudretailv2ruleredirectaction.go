package shared

// GoogleCloudRetailV2RuleRedirectAction
// Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.
type GoogleCloudRetailV2RuleRedirectAction struct {
	RedirectURI *string `json:"redirectUri,omitempty"`
}
