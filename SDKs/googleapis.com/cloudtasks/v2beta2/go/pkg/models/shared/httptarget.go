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
	HeaderOverrides []HeaderOverride          `json:"headerOverrides,omitempty"`
	HTTPMethod      *HTTPTargetHTTPMethodEnum `json:"httpMethod,omitempty"`
	OauthToken      *OAuthToken               `json:"oauthToken,omitempty"`
	OidcToken       *OidcToken                `json:"oidcToken,omitempty"`
	URIOverride     *URIOverride              `json:"uriOverride,omitempty"`
}
