package operations

type NetworkServiceConfigsCreateRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type NetworkServiceConfigsCreate400ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServiceConfigsCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServiceConfigsCreate400ApplicationJSON struct {
	Detail   *string                                               `json:"detail,omitempty"`
	Instance *string                                               `json:"instance,omitempty"`
	Status   *interface{}                                          `json:"status,omitempty"`
	Title    *interface{}                                          `json:"title,omitempty"`
	Type     NetworkServiceConfigsCreate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsCreate401ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceConfigsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceConfigsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceConfigsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceConfigsCreate401ApplicationJSON struct {
	Detail   *string                                               `json:"detail,omitempty"`
	Instance *string                                               `json:"instance,omitempty"`
	Status   *interface{}                                          `json:"status,omitempty"`
	Title    *interface{}                                          `json:"title,omitempty"`
	Type     NetworkServiceConfigsCreate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsCreate403ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceConfigsCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceConfigsCreate403ApplicationJSON struct {
	Detail   *string                                               `json:"detail,omitempty"`
	Instance *string                                               `json:"instance,omitempty"`
	Status   *interface{}                                          `json:"status,omitempty"`
	Title    *interface{}                                          `json:"title,omitempty"`
	Type     NetworkServiceConfigsCreate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsCreateResponse struct {
	ContentType                                         string
	NetworkServiceConfig                                *interface{}
	StatusCode                                          int64
	NetworkServiceConfigsCreate400ApplicationJSONObject *NetworkServiceConfigsCreate400ApplicationJSON
	NetworkServiceConfigsCreate401ApplicationJSONObject *NetworkServiceConfigsCreate401ApplicationJSON
	NetworkServiceConfigsCreate403ApplicationJSONObject *NetworkServiceConfigsCreate403ApplicationJSON
}
