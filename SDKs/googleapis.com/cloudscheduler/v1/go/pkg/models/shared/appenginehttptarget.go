package shared

type AppEngineHTTPTargetHTTPMethodEnum string

const (
	AppEngineHTTPTargetHTTPMethodEnumHTTPMethodUnspecified AppEngineHTTPTargetHTTPMethodEnum = "HTTP_METHOD_UNSPECIFIED"
	AppEngineHTTPTargetHTTPMethodEnumPost                  AppEngineHTTPTargetHTTPMethodEnum = "POST"
	AppEngineHTTPTargetHTTPMethodEnumGet                   AppEngineHTTPTargetHTTPMethodEnum = "GET"
	AppEngineHTTPTargetHTTPMethodEnumHead                  AppEngineHTTPTargetHTTPMethodEnum = "HEAD"
	AppEngineHTTPTargetHTTPMethodEnumPut                   AppEngineHTTPTargetHTTPMethodEnum = "PUT"
	AppEngineHTTPTargetHTTPMethodEnumDelete                AppEngineHTTPTargetHTTPMethodEnum = "DELETE"
	AppEngineHTTPTargetHTTPMethodEnumPatch                 AppEngineHTTPTargetHTTPMethodEnum = "PATCH"
	AppEngineHTTPTargetHTTPMethodEnumOptions               AppEngineHTTPTargetHTTPMethodEnum = "OPTIONS"
)

// AppEngineHTTPTarget
// App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.
type AppEngineHTTPTarget struct {
	AppEngineRouting *AppEngineRouting                  `json:"appEngineRouting,omitempty"`
	Body             *string                            `json:"body,omitempty"`
	Headers          map[string]string                  `json:"headers,omitempty"`
	HTTPMethod       *AppEngineHTTPTargetHTTPMethodEnum `json:"httpMethod,omitempty"`
	RelativeURI      *string                            `json:"relativeUri,omitempty"`
}
