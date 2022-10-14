package operations

type NetworkFeatureConfigsCreateRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type NetworkFeatureConfigsCreate400ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkFeatureConfigsCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkFeatureConfigsCreate400ApplicationJSON struct {
	Detail   *string                                               `json:"detail,omitempty"`
	Instance *string                                               `json:"instance,omitempty"`
	Status   *interface{}                                          `json:"status,omitempty"`
	Title    *interface{}                                          `json:"title,omitempty"`
	Type     NetworkFeatureConfigsCreate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsCreate401ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkFeatureConfigsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkFeatureConfigsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkFeatureConfigsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkFeatureConfigsCreate401ApplicationJSON struct {
	Detail   *string                                               `json:"detail,omitempty"`
	Instance *string                                               `json:"instance,omitempty"`
	Status   *interface{}                                          `json:"status,omitempty"`
	Title    *interface{}                                          `json:"title,omitempty"`
	Type     NetworkFeatureConfigsCreate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsCreate403ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkFeatureConfigsCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkFeatureConfigsCreate403ApplicationJSON struct {
	Detail   *string                                               `json:"detail,omitempty"`
	Instance *string                                               `json:"instance,omitempty"`
	Status   *interface{}                                          `json:"status,omitempty"`
	Title    *interface{}                                          `json:"title,omitempty"`
	Type     NetworkFeatureConfigsCreate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsCreateResponse struct {
	ContentType                                         string
	NetworkFeatureConfig                                *interface{}
	StatusCode                                          int64
	NetworkFeatureConfigsCreate400ApplicationJSONObject *NetworkFeatureConfigsCreate400ApplicationJSON
	NetworkFeatureConfigsCreate401ApplicationJSONObject *NetworkFeatureConfigsCreate401ApplicationJSON
	NetworkFeatureConfigsCreate403ApplicationJSONObject *NetworkFeatureConfigsCreate403ApplicationJSON
}
