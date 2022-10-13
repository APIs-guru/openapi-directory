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

type AppEngineHTTPTarget struct {
	AppEngineRouting *AppEngineRouting                  `json:"appEngineRouting"`
	Body             *string                            `json:"body"`
	Headers          map[string]string                  `json:"headers"`
	HTTPMethod       *AppEngineHTTPTargetHTTPMethodEnum `json:"httpMethod"`
	RelativeURI      *string                            `json:"relativeUri"`
}
