package operations

type NetworkFeatureConfigsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkFeatureConfigsReadRequest struct {
	PathParams NetworkFeatureConfigsReadPathParams
}

type NetworkFeatureConfigsRead401ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkFeatureConfigsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkFeatureConfigsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkFeatureConfigsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkFeatureConfigsRead401ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     NetworkFeatureConfigsRead401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsRead403ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkFeatureConfigsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkFeatureConfigsRead403ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     NetworkFeatureConfigsRead403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsRead404ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkFeatureConfigsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkFeatureConfigsRead404ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     NetworkFeatureConfigsRead404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsReadResponse struct {
	ContentType                                       string
	NetworkFeatureConfig                              *interface{}
	StatusCode                                        int64
	NetworkFeatureConfigsRead401ApplicationJSONObject *NetworkFeatureConfigsRead401ApplicationJSON
	NetworkFeatureConfigsRead403ApplicationJSONObject *NetworkFeatureConfigsRead403ApplicationJSON
	NetworkFeatureConfigsRead404ApplicationJSONObject *NetworkFeatureConfigsRead404ApplicationJSON
}
