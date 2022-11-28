package shared

// HTTPCookieEvidence
// Evidence for HTTP cookie-related policy violations.
type HTTPCookieEvidence struct {
	CookieNames    []string `json:"cookieNames,omitempty"`
	MaxCookieCount *int32   `json:"maxCookieCount,omitempty"`
}
