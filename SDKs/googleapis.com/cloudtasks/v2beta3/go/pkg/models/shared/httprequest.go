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
// HTTP request. The task will be pushed to the worker as an HTTP request. If the worker or the redirected worker acknowledges the task by returning a successful HTTP response code ([`200` - `299`]), the task will be removed from the queue. If any other HTTP response code is returned or no response is received, the task will be retried according to the following: * User-specified throttling: retry configuration, rate limits, and the queue's state. * System throttling: To prevent the worker from overloading, Cloud Tasks may temporarily reduce the queue's effective rate. User-specified settings will not be changed. System throttling happens because: * Cloud Tasks backs off on all errors. Normally the backoff specified in rate limits will be used. But if the worker returns `429` (Too Many Requests), `503` (Service Unavailable), or the rate of errors is high, Cloud Tasks will use a higher backoff rate. The retry specified in the `Retry-After` HTTP response header is considered. * To prevent traffic spikes and to smooth sudden increases in traffic, dispatches ramp up slowly when the queue is newly created or idle and if large numbers of tasks suddenly become available to dispatch (due to spikes in create task rates, the queue being unpaused, or many tasks that are scheduled at the same time).
type HTTPRequest struct {
	Body       *string                    `json:"body,omitempty"`
	Headers    map[string]string          `json:"headers,omitempty"`
	HTTPMethod *HTTPRequestHTTPMethodEnum `json:"httpMethod,omitempty"`
	OauthToken *OAuthToken                `json:"oauthToken,omitempty"`
	OidcToken  *OidcToken                 `json:"oidcToken,omitempty"`
	URL        *string                    `json:"url,omitempty"`
}
