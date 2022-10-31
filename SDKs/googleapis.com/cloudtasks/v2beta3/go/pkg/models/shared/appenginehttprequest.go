package shared




type AppEngineHTTPRequestHTTPMethodEnum string

const (
    AppEngineHTTPRequestHTTPMethodEnumHTTPMethodUnspecified AppEngineHTTPRequestHTTPMethodEnum = "HTTP_METHOD_UNSPECIFIED"
AppEngineHTTPRequestHTTPMethodEnumPost AppEngineHTTPRequestHTTPMethodEnum = "POST"
AppEngineHTTPRequestHTTPMethodEnumGet AppEngineHTTPRequestHTTPMethodEnum = "GET"
AppEngineHTTPRequestHTTPMethodEnumHead AppEngineHTTPRequestHTTPMethodEnum = "HEAD"
AppEngineHTTPRequestHTTPMethodEnumPut AppEngineHTTPRequestHTTPMethodEnum = "PUT"
AppEngineHTTPRequestHTTPMethodEnumDelete AppEngineHTTPRequestHTTPMethodEnum = "DELETE"
AppEngineHTTPRequestHTTPMethodEnumPatch AppEngineHTTPRequestHTTPMethodEnum = "PATCH"
AppEngineHTTPRequestHTTPMethodEnumOptions AppEngineHTTPRequestHTTPMethodEnum = "OPTIONS"
)


type AppEngineHTTPRequest struct {
    AppEngineRouting *AppEngineRouting `json:"appEngineRouting,omitempty"`
    Body *string `json:"body,omitempty"`
    Headers map[string]string `json:"headers,omitempty"`
    HTTPMethod *AppEngineHTTPRequestHTTPMethodEnum `json:"httpMethod,omitempty"`
    RelativeURI *string `json:"relativeUri,omitempty"`
    
}

