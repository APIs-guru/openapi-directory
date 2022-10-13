package operations

type NetworkFeatureConfigsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkFeatureConfigsPartialUpdateRequest struct {
	PathParams NetworkFeatureConfigsPartialUpdatePathParams
	Request    *interface{} `request:"mediaType=application/merge-patch+json"`
}

type NetworkFeatureConfigsPartialUpdate400ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsPartialUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkFeatureConfigsPartialUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkFeatureConfigsPartialUpdate400ApplicationJSON struct {
	Detail   *string                                                      `json:"detail"`
	Instance *string                                                      `json:"instance"`
	Status   *interface{}                                                 `json:"status"`
	Title    *interface{}                                                 `json:"title"`
	Type     NetworkFeatureConfigsPartialUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsPartialUpdate401ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkFeatureConfigsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkFeatureConfigsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkFeatureConfigsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkFeatureConfigsPartialUpdate401ApplicationJSON struct {
	Detail   *string                                                      `json:"detail"`
	Instance *string                                                      `json:"instance"`
	Status   *interface{}                                                 `json:"status"`
	Title    *interface{}                                                 `json:"title"`
	Type     NetworkFeatureConfigsPartialUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsPartialUpdate403ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsPartialUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkFeatureConfigsPartialUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkFeatureConfigsPartialUpdate403ApplicationJSON struct {
	Detail   *string                                                      `json:"detail"`
	Instance *string                                                      `json:"instance"`
	Status   *interface{}                                                 `json:"status"`
	Title    *interface{}                                                 `json:"title"`
	Type     NetworkFeatureConfigsPartialUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsPartialUpdate404ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsPartialUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkFeatureConfigsPartialUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkFeatureConfigsPartialUpdate404ApplicationJSON struct {
	Detail   *string                                                      `json:"detail"`
	Instance *string                                                      `json:"instance"`
	Status   *interface{}                                                 `json:"status"`
	Title    *interface{}                                                 `json:"title"`
	Type     NetworkFeatureConfigsPartialUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsPartialUpdateResponse struct {
	ContentType                                                string
	NetworkFeatureConfig                                       *interface{}
	StatusCode                                                 int64
	NetworkFeatureConfigsPartialUpdate400ApplicationJSONObject *NetworkFeatureConfigsPartialUpdate400ApplicationJSON
	NetworkFeatureConfigsPartialUpdate401ApplicationJSONObject *NetworkFeatureConfigsPartialUpdate401ApplicationJSON
	NetworkFeatureConfigsPartialUpdate403ApplicationJSONObject *NetworkFeatureConfigsPartialUpdate403ApplicationJSON
	NetworkFeatureConfigsPartialUpdate404ApplicationJSONObject *NetworkFeatureConfigsPartialUpdate404ApplicationJSON
}
