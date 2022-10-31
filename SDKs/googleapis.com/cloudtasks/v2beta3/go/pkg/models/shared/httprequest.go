package shared

type HTTPRequestHTTPMethodEnum string

const (
	HTTPRequestHTTPMethodEnumHTTPMethodUnspecified HTTPRequestHTTPMethodEnum = "HTTP_METHOD_UNSPECIFIED"
	HTTPRequestHTTPMethodEnumPost                  HTTPRequestHTTPMethodEnum = "POST"
	HTTPRequestHTTPMethodEnumGet                   HTTPRequestHTTPMethodEnum = "GET"
	HTTPRequestHTTPMethodEnumHead                  HTTPRequestHTTPMethodEnum = "HEAD"
	HTTPRequestHTTPMethodEnumPut                   HTTPRequestHTTPMethodEnum = "PUT"
	HTTPRequestHTTPMethodEnumDelete                HTTPRequestHTTPMethodEnum = "DELETE"
	HTTPRequestHTTPMethodEnumPatch                 HTTPRequestHTTPMethodEnum = "PATCH"
	HTTPRequestHTTPMethodEnumOptions               HTTPRequestHTTPMethodEnum = "OPTIONS"
)

type HTTPRequest struct {
	Body       *string                    `json:"body,omitempty"`
	Headers    map[string]string          `json:"headers,omitempty"`
	HTTPMethod *HTTPRequestHTTPMethodEnum `json:"httpMethod,omitempty"`
	OauthToken *OAuthToken                `json:"oauthToken,omitempty"`
	OidcToken  *OidcToken                 `json:"oidcToken,omitempty"`
	URL        *string                    `json:"url,omitempty"`
}
