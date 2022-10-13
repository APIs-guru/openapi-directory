package shared

type HTTPCookieEvidence struct {
	CookieNames    []string `json:"cookieNames"`
	MaxCookieCount *int32   `json:"maxCookieCount"`
}
