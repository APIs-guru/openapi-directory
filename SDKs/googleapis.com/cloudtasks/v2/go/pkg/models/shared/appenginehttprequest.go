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

type AppEngineHTTPRequest struct {
	AppEngineRouting *AppEngineRouting                   `json:"appEngineRouting"`
	Body             *string                             `json:"body"`
	Headers          map[string]string                   `json:"headers"`
	HTTPMethod       *AppEngineHTTPRequestHTTPMethodEnum `json:"httpMethod"`
	RelativeURI      *string                             `json:"relativeUri"`
}
