package shared

type HTTPCheckContentTypeEnum string

const (
	HTTPCheckContentTypeEnumTypeUnspecified HTTPCheckContentTypeEnum = "TYPE_UNSPECIFIED"
	HTTPCheckContentTypeEnumURLEncoded      HTTPCheckContentTypeEnum = "URL_ENCODED"
)

type HTTPCheckRequestMethodEnum string

const (
	HTTPCheckRequestMethodEnumMethodUnspecified HTTPCheckRequestMethodEnum = "METHOD_UNSPECIFIED"
	HTTPCheckRequestMethodEnumGet               HTTPCheckRequestMethodEnum = "GET"
	HTTPCheckRequestMethodEnumPost              HTTPCheckRequestMethodEnum = "POST"
)

type HTTPCheck struct {
	AcceptedResponseStatusCodes []ResponseStatusCode        `json:"acceptedResponseStatusCodes"`
	AuthInfo                    *BasicAuthentication        `json:"authInfo"`
	Body                        *string                     `json:"body"`
	ContentType                 *HTTPCheckContentTypeEnum   `json:"contentType"`
	Headers                     map[string]string           `json:"headers"`
	MaskHeaders                 *bool                       `json:"maskHeaders"`
	Path                        *string                     `json:"path"`
	PingConfig                  *PingConfig                 `json:"pingConfig"`
	Port                        *int32                      `json:"port"`
	RequestMethod               *HTTPCheckRequestMethodEnum `json:"requestMethod"`
	UseSsl                      *bool                       `json:"useSsl"`
	ValidateSsl                 *bool                       `json:"validateSsl"`
}
