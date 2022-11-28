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

// HTTPRequest
// HTTP request. The task will be pushed to the worker as an HTTP request. An HTTP request embodies a url, an http method, headers, body and authorization for the http task.
type HTTPRequest struct {
	Body       *string                    `json:"body,omitempty"`
	Headers    map[string]string          `json:"headers,omitempty"`
	HTTPMethod *HTTPRequestHTTPMethodEnum `json:"httpMethod,omitempty"`
	OauthToken *OAuthToken                `json:"oauthToken,omitempty"`
	OidcToken  *OidcToken                 `json:"oidcToken,omitempty"`
	URL        *string                    `json:"url,omitempty"`
}
