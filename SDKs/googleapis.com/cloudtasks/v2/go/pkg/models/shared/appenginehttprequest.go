package shared

type AppEngineHTTPRequestHTTPMethodEnum string

const (
	AppEngineHTTPRequestHTTPMethodEnumHTTPMethodUnspecified AppEngineHTTPRequestHTTPMethodEnum = "HTTP_METHOD_UNSPECIFIED"
	AppEngineHTTPRequestHTTPMethodEnumPost                  AppEngineHTTPRequestHTTPMethodEnum = "POST"
	AppEngineHTTPRequestHTTPMethodEnumGet                   AppEngineHTTPRequestHTTPMethodEnum = "GET"
	AppEngineHTTPRequestHTTPMethodEnumHead                  AppEngineHTTPRequestHTTPMethodEnum = "HEAD"
	AppEngineHTTPRequestHTTPMethodEnumPut                   AppEngineHTTPRequestHTTPMethodEnum = "PUT"
	AppEngineHTTPRequestHTTPMethodEnumDelete                AppEngineHTTPRequestHTTPMethodEnum = "DELETE"
	AppEngineHTTPRequestHTTPMethodEnumPatch                 AppEngineHTTPRequestHTTPMethodEnum = "PATCH"
	AppEngineHTTPRequestHTTPMethodEnumOptions               AppEngineHTTPRequestHTTPMethodEnum = "OPTIONS"
)

// AppEngineHTTPRequest
// App Engine HTTP request. The message defines the HTTP request that is sent to an App Engine app when the task is dispatched. Using AppEngineHttpRequest requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform` The task will be delivered to the App Engine app which belongs to the same project as the queue. For more information, see [How Requests are Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and how routing is affected by [dispatch files](https://cloud.google.com/appengine/docs/python/config/dispatchref). Traffic is encrypted during transport and never leaves Google datacenters. Because this traffic is carried over a communication mechanism internal to Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS). The request to the handler, however, will appear to have used the HTTP protocol. The AppEngineRouting used to construct the URL that the task is delivered to can be set at the queue-level or task-level: * If app_engine_routing_override is set on the queue, this value is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing. The `url` that the task will be sent to is: * `url =` host `+` relative_uri Tasks can be dispatched to secure app handlers, unsecure app handlers, and URIs restricted with [`login: admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref). Because tasks are not run as any user, they cannot be dispatched to URIs restricted with [`login: required`](https://cloud.google.com/appengine/docs/standard/python/config/appref) Task dispatches also do not follow redirects. The task attempt has succeeded if the app's request handler returns an HTTP response code in the range [`200` - `299`]. The task attempt has failed if the app's handler returns a non-2xx response code or Cloud Tasks does not receive response before the deadline. Failed tasks will be retried according to the retry configuration. `503` (Service Unavailable) is considered an App Engine system error instead of an application error and will cause Cloud Tasks' traffic congestion control to temporarily throttle the queue's dispatches. Unlike other types of task targets, a `429` (Too Many Requests) response from an app handler does not cause traffic congestion control to throttle the queue.
type AppEngineHTTPRequest struct {
	AppEngineRouting *AppEngineRouting                   `json:"appEngineRouting,omitempty"`
	Body             *string                             `json:"body,omitempty"`
	Headers          map[string]string                   `json:"headers,omitempty"`
	HTTPMethod       *AppEngineHTTPRequestHTTPMethodEnum `json:"httpMethod,omitempty"`
	RelativeURI      *string                             `json:"relativeUri,omitempty"`
}
