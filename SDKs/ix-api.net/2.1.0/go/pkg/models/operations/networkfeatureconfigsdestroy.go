package operations

type NetworkFeatureConfigsDestroyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkFeatureConfigsDestroyRequest struct {
	PathParams NetworkFeatureConfigsDestroyPathParams
}

type NetworkFeatureConfigsDestroy400ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML NetworkFeatureConfigsDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type NetworkFeatureConfigsDestroy400ApplicationJSON struct {
	Detail   *string                                                `json:"detail,omitempty"`
	Instance *string                                                `json:"instance,omitempty"`
	Status   *interface{}                                           `json:"status,omitempty"`
	Title    *interface{}                                           `json:"title,omitempty"`
	Type     NetworkFeatureConfigsDestroy400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsDestroy401ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkFeatureConfigsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkFeatureConfigsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkFeatureConfigsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkFeatureConfigsDestroy401ApplicationJSON struct {
	Detail   *string                                                `json:"detail,omitempty"`
	Instance *string                                                `json:"instance,omitempty"`
	Status   *interface{}                                           `json:"status,omitempty"`
	Title    *interface{}                                           `json:"title,omitempty"`
	Type     NetworkFeatureConfigsDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsDestroy403ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkFeatureConfigsDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkFeatureConfigsDestroy403ApplicationJSON struct {
	Detail   *string                                                `json:"detail,omitempty"`
	Instance *string                                                `json:"instance,omitempty"`
	Status   *interface{}                                           `json:"status,omitempty"`
	Title    *interface{}                                           `json:"title,omitempty"`
	Type     NetworkFeatureConfigsDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsDestroy404ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkFeatureConfigsDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkFeatureConfigsDestroy404ApplicationJSON struct {
	Detail   *string                                                `json:"detail,omitempty"`
	Instance *string                                                `json:"instance,omitempty"`
	Status   *interface{}                                           `json:"status,omitempty"`
	Title    *interface{}                                           `json:"title,omitempty"`
	Type     NetworkFeatureConfigsDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsDestroyResponse struct {
	ContentType                                          string
	NetworkFeatureConfig                                 *interface{}
	StatusCode                                           int64
	NetworkFeatureConfigsDestroy400ApplicationJSONObject *NetworkFeatureConfigsDestroy400ApplicationJSON
	NetworkFeatureConfigsDestroy401ApplicationJSONObject *NetworkFeatureConfigsDestroy401ApplicationJSON
	NetworkFeatureConfigsDestroy403ApplicationJSONObject *NetworkFeatureConfigsDestroy403ApplicationJSON
	NetworkFeatureConfigsDestroy404ApplicationJSONObject *NetworkFeatureConfigsDestroy404ApplicationJSON
}
