package operations

type NetworkServicesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServicesPartialUpdateRequest struct {
	PathParams NetworkServicesPartialUpdatePathParams
	Request    *interface{} `request:"mediaType=application/merge-patch+json"`
}

type NetworkServicesPartialUpdate400ApplicationJSONTypeEnum string

const (
	NetworkServicesPartialUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServicesPartialUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServicesPartialUpdate400ApplicationJSON struct {
	Detail   *string                                                `json:"detail"`
	Instance *string                                                `json:"instance"`
	Status   *interface{}                                           `json:"status"`
	Title    *interface{}                                           `json:"title"`
	Type     NetworkServicesPartialUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesPartialUpdate401ApplicationJSONTypeEnum string

const (
	NetworkServicesPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServicesPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServicesPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServicesPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServicesPartialUpdate401ApplicationJSON struct {
	Detail   *string                                                `json:"detail"`
	Instance *string                                                `json:"instance"`
	Status   *interface{}                                           `json:"status"`
	Title    *interface{}                                           `json:"title"`
	Type     NetworkServicesPartialUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesPartialUpdate403ApplicationJSONTypeEnum string

const (
	NetworkServicesPartialUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServicesPartialUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServicesPartialUpdate403ApplicationJSON struct {
	Detail   *string                                                `json:"detail"`
	Instance *string                                                `json:"instance"`
	Status   *interface{}                                           `json:"status"`
	Title    *interface{}                                           `json:"title"`
	Type     NetworkServicesPartialUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesPartialUpdate404ApplicationJSONTypeEnum string

const (
	NetworkServicesPartialUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServicesPartialUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServicesPartialUpdate404ApplicationJSON struct {
	Detail   *string                                                `json:"detail"`
	Instance *string                                                `json:"instance"`
	Status   *interface{}                                           `json:"status"`
	Title    *interface{}                                           `json:"title"`
	Type     NetworkServicesPartialUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesPartialUpdateResponse struct {
	ContentType                                          string
	NetworkService                                       *interface{}
	StatusCode                                           int64
	NetworkServicesPartialUpdate400ApplicationJSONObject *NetworkServicesPartialUpdate400ApplicationJSON
	NetworkServicesPartialUpdate401ApplicationJSONObject *NetworkServicesPartialUpdate401ApplicationJSON
	NetworkServicesPartialUpdate403ApplicationJSONObject *NetworkServicesPartialUpdate403ApplicationJSON
	NetworkServicesPartialUpdate404ApplicationJSONObject *NetworkServicesPartialUpdate404ApplicationJSON
}
