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
	Body       *string                   `json:"body"`
	Headers    map[string]string         `json:"headers"`
	HTTPMethod *HTTPTargetHTTPMethodEnum `json:"httpMethod"`
	OauthToken *OAuthToken               `json:"oauthToken"`
	OidcToken  *OidcToken                `json:"oidcToken"`
	URI        *string                   `json:"uri"`
}
