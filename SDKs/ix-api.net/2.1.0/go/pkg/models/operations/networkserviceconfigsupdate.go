package operations

type NetworkServiceConfigsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceConfigsUpdateRequest struct {
	PathParams NetworkServiceConfigsUpdatePathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type NetworkServiceConfigsUpdate400ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServiceConfigsUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServiceConfigsUpdate400ApplicationJSON struct {
	Detail   *string                                               `json:"detail"`
	Instance *string                                               `json:"instance"`
	Status   *interface{}                                          `json:"status"`
	Title    *interface{}                                          `json:"title"`
	Type     NetworkServiceConfigsUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsUpdate401ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceConfigsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceConfigsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceConfigsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceConfigsUpdate401ApplicationJSON struct {
	Detail   *string                                               `json:"detail"`
	Instance *string                                               `json:"instance"`
	Status   *interface{}                                          `json:"status"`
	Title    *interface{}                                          `json:"title"`
	Type     NetworkServiceConfigsUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsUpdate403ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceConfigsUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceConfigsUpdate403ApplicationJSON struct {
	Detail   *string                                               `json:"detail"`
	Instance *string                                               `json:"instance"`
	Status   *interface{}                                          `json:"status"`
	Title    *interface{}                                          `json:"title"`
	Type     NetworkServiceConfigsUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsUpdate404ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServiceConfigsUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServiceConfigsUpdate404ApplicationJSON struct {
	Detail   *string                                               `json:"detail"`
	Instance *string                                               `json:"instance"`
	Status   *interface{}                                          `json:"status"`
	Title    *interface{}                                          `json:"title"`
	Type     NetworkServiceConfigsUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsUpdateResponse struct {
	ContentType                                         string
	NetworkServiceConfig                                *interface{}
	StatusCode                                          int64
	NetworkServiceConfigsUpdate400ApplicationJSONObject *NetworkServiceConfigsUpdate400ApplicationJSON
	NetworkServiceConfigsUpdate401ApplicationJSONObject *NetworkServiceConfigsUpdate401ApplicationJSON
	NetworkServiceConfigsUpdate403ApplicationJSONObject *NetworkServiceConfigsUpdate403ApplicationJSON
	NetworkServiceConfigsUpdate404ApplicationJSONObject *NetworkServiceConfigsUpdate404ApplicationJSON
}
