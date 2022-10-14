package shared

type HTTPTargetHTTPMethodEnum string

const (
	HTTPTargetHTTPMethodEnumHTTPMethodUnspecified HTTPTargetHTTPMethodEnum = "HTTP_METHOD_UNSPECIFIED"
	HTTPTargetHTTPMethodEnumPost                  HTTPTargetHTTPMethodEnum = "POST"
	HTTPTargetHTTPMethodEnumGet                   HTTPTargetHTTPMethodEnum = "GET"
	HTTPTargetHTTPMethodEnumHead                  HTTPTargetHTTPMethodEnum = "HEAD"
	HTTPTargetHTTPMethodEnumPut                   HTTPTargetHTTPMethodEnum = "PUT"
	HTTPTargetHTTPMethodEnumDelete                HTTPTargetHTTPMethodEnum = "DELETE"
	HTTPTargetHTTPMethodEnumPatch                 HTTPTargetHTTPMethodEnum = "PATCH"
	HTTPTargetHTTPMethodEnumOptions               HTTPTargetHTTPMethodEnum = "OPTIONS"
)

type HTTPTarget struct {
	Body       *string                   `json:"body,omitempty"`
	Headers    map[string]string         `json:"headers,omitempty"`
	HTTPMethod *HTTPTargetHTTPMethodEnum `json:"httpMethod,omitempty"`
	OauthToken *OAuthToken               `json:"oauthToken,omitempty"`
	OidcToken  *OidcToken                `json:"oidcToken,omitempty"`
	URI        *string                   `json:"uri,omitempty"`
}
