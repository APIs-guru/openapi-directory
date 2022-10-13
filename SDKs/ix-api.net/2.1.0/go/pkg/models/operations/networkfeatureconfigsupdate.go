package operations

type NetworkFeatureConfigsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkFeatureConfigsUpdateRequest struct {
	PathParams NetworkFeatureConfigsUpdatePathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type NetworkFeatureConfigsUpdate400ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkFeatureConfigsUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkFeatureConfigsUpdate400ApplicationJSON struct {
	Detail   *string                                               `json:"detail"`
	Instance *string                                               `json:"instance"`
	Status   *interface{}                                          `json:"status"`
	Title    *interface{}                                          `json:"title"`
	Type     NetworkFeatureConfigsUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsUpdate401ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkFeatureConfigsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkFeatureConfigsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkFeatureConfigsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkFeatureConfigsUpdate401ApplicationJSON struct {
	Detail   *string                                               `json:"detail"`
	Instance *string                                               `json:"instance"`
	Status   *interface{}                                          `json:"status"`
	Title    *interface{}                                          `json:"title"`
	Type     NetworkFeatureConfigsUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsUpdate403ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkFeatureConfigsUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkFeatureConfigsUpdate403ApplicationJSON struct {
	Detail   *string                                               `json:"detail"`
	Instance *string                                               `json:"instance"`
	Status   *interface{}                                          `json:"status"`
	Title    *interface{}                                          `json:"title"`
	Type     NetworkFeatureConfigsUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsUpdate404ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkFeatureConfigsUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkFeatureConfigsUpdate404ApplicationJSON struct {
	Detail   *string                                               `json:"detail"`
	Instance *string                                               `json:"instance"`
	Status   *interface{}                                          `json:"status"`
	Title    *interface{}                                          `json:"title"`
	Type     NetworkFeatureConfigsUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsUpdateResponse struct {
	ContentType                                         string
	NetworkFeatureConfig                                *interface{}
	StatusCode                                          int64
	NetworkFeatureConfigsUpdate400ApplicationJSONObject *NetworkFeatureConfigsUpdate400ApplicationJSON
	NetworkFeatureConfigsUpdate401ApplicationJSONObject *NetworkFeatureConfigsUpdate401ApplicationJSON
	NetworkFeatureConfigsUpdate403ApplicationJSONObject *NetworkFeatureConfigsUpdate403ApplicationJSON
	NetworkFeatureConfigsUpdate404ApplicationJSONObject *NetworkFeatureConfigsUpdate404ApplicationJSON
}
