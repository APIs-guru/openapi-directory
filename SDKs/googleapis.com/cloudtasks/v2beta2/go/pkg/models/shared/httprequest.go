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
	Body       *string                    `json:"body"`
	Headers    map[string]string          `json:"headers"`
	HTTPMethod *HTTPRequestHTTPMethodEnum `json:"httpMethod"`
	OauthToken *OAuthToken                `json:"oauthToken"`
	OidcToken  *OidcToken                 `json:"oidcToken"`
	URL        *string                    `json:"url"`
}
