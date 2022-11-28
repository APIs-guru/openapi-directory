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

// HTTPTarget
// Http target. The job will be pushed to the job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.
type HTTPTarget struct {
	Body       *string                   `json:"body,omitempty"`
	Headers    map[string]string         `json:"headers,omitempty"`
	HTTPMethod *HTTPTargetHTTPMethodEnum `json:"httpMethod,omitempty"`
	OauthToken *OAuthToken               `json:"oauthToken,omitempty"`
	OidcToken  *OidcToken                `json:"oidcToken,omitempty"`
	URI        *string                   `json:"uri,omitempty"`
}
