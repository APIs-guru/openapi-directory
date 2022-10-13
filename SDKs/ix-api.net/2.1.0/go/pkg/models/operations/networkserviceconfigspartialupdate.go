package operations

type NetworkServiceConfigsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceConfigsPartialUpdateRequest struct {
	PathParams NetworkServiceConfigsPartialUpdatePathParams
	Request    *interface{} `request:"mediaType=application/merge-patch+json"`
}

type NetworkServiceConfigsPartialUpdate400ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsPartialUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServiceConfigsPartialUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServiceConfigsPartialUpdate400ApplicationJSON struct {
	Detail   *string                                                      `json:"detail"`
	Instance *string                                                      `json:"instance"`
	Status   *interface{}                                                 `json:"status"`
	Title    *interface{}                                                 `json:"title"`
	Type     NetworkServiceConfigsPartialUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsPartialUpdate401ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceConfigsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceConfigsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceConfigsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceConfigsPartialUpdate401ApplicationJSON struct {
	Detail   *string                                                      `json:"detail"`
	Instance *string                                                      `json:"instance"`
	Status   *interface{}                                                 `json:"status"`
	Title    *interface{}                                                 `json:"title"`
	Type     NetworkServiceConfigsPartialUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsPartialUpdate403ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsPartialUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceConfigsPartialUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceConfigsPartialUpdate403ApplicationJSON struct {
	Detail   *string                                                      `json:"detail"`
	Instance *string                                                      `json:"instance"`
	Status   *interface{}                                                 `json:"status"`
	Title    *interface{}                                                 `json:"title"`
	Type     NetworkServiceConfigsPartialUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsPartialUpdate404ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsPartialUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServiceConfigsPartialUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServiceConfigsPartialUpdate404ApplicationJSON struct {
	Detail   *string                                                      `json:"detail"`
	Instance *string                                                      `json:"instance"`
	Status   *interface{}                                                 `json:"status"`
	Title    *interface{}                                                 `json:"title"`
	Type     NetworkServiceConfigsPartialUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsPartialUpdateResponse struct {
	ContentType                                                string
	NetworkServiceConfig                                       *interface{}
	StatusCode                                                 int64
	NetworkServiceConfigsPartialUpdate400ApplicationJSONObject *NetworkServiceConfigsPartialUpdate400ApplicationJSON
	NetworkServiceConfigsPartialUpdate401ApplicationJSONObject *NetworkServiceConfigsPartialUpdate401ApplicationJSON
	NetworkServiceConfigsPartialUpdate403ApplicationJSONObject *NetworkServiceConfigsPartialUpdate403ApplicationJSON
	NetworkServiceConfigsPartialUpdate404ApplicationJSONObject *NetworkServiceConfigsPartialUpdate404ApplicationJSON
}
