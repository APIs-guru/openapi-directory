package operations

type NetworkServicesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServicesUpdateRequest struct {
	PathParams NetworkServicesUpdatePathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type NetworkServicesUpdate400ApplicationJSONTypeEnum string

const (
	NetworkServicesUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServicesUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServicesUpdate400ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     NetworkServicesUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesUpdate401ApplicationJSONTypeEnum string

const (
	NetworkServicesUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServicesUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServicesUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServicesUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServicesUpdate401ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     NetworkServicesUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesUpdate403ApplicationJSONTypeEnum string

const (
	NetworkServicesUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServicesUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServicesUpdate403ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     NetworkServicesUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesUpdate404ApplicationJSONTypeEnum string

const (
	NetworkServicesUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServicesUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServicesUpdate404ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     NetworkServicesUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesUpdateResponse struct {
	ContentType                                   string
	NetworkService                                *interface{}
	StatusCode                                    int64
	NetworkServicesUpdate400ApplicationJSONObject *NetworkServicesUpdate400ApplicationJSON
	NetworkServicesUpdate401ApplicationJSONObject *NetworkServicesUpdate401ApplicationJSON
	NetworkServicesUpdate403ApplicationJSONObject *NetworkServicesUpdate403ApplicationJSON
	NetworkServicesUpdate404ApplicationJSONObject *NetworkServicesUpdate404ApplicationJSON
}
