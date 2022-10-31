package shared




type HTTPCheckContentTypeEnum string

const (
    HTTPCheckContentTypeEnumTypeUnspecified HTTPCheckContentTypeEnum = "TYPE_UNSPECIFIED"
HTTPCheckContentTypeEnumURLEncoded HTTPCheckContentTypeEnum = "URL_ENCODED"
)



type HTTPCheckRequestMethodEnum string

const (
    HTTPCheckRequestMethodEnumMethodUnspecified HTTPCheckRequestMethodEnum = "METHOD_UNSPECIFIED"
HTTPCheckRequestMethodEnumGet HTTPCheckRequestMethodEnum = "GET"
HTTPCheckRequestMethodEnumPost HTTPCheckRequestMethodEnum = "POST"
)


type HTTPCheck struct {
    AcceptedResponseStatusCodes []ResponseStatusCode `json:"acceptedResponseStatusCodes,omitempty"`
    AuthInfo *BasicAuthentication `json:"authInfo,omitempty"`
    Body *string `json:"body,omitempty"`
    ContentType *HTTPCheckContentTypeEnum `json:"contentType,omitempty"`
    Headers map[string]string `json:"headers,omitempty"`
    MaskHeaders *bool `json:"maskHeaders,omitempty"`
    Path *string `json:"path,omitempty"`
    PingConfig *PingConfig `json:"pingConfig,omitempty"`
    Port *int32 `json:"port,omitempty"`
    RequestMethod *HTTPCheckRequestMethodEnum `json:"requestMethod,omitempty"`
    UseSsl *bool `json:"useSsl,omitempty"`
    ValidateSsl *bool `json:"validateSsl,omitempty"`
    
}

