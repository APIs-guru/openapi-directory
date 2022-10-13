package operations

type NetworkServicesCreateRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type NetworkServicesCreate400ApplicationJSONTypeEnum string

const (
	NetworkServicesCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServicesCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServicesCreate400ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     NetworkServicesCreate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesCreate401ApplicationJSONTypeEnum string

const (
	NetworkServicesCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServicesCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServicesCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServicesCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServicesCreate401ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     NetworkServicesCreate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesCreate403ApplicationJSONTypeEnum string

const (
	NetworkServicesCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServicesCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServicesCreate403ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     NetworkServicesCreate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesCreateResponse struct {
	ContentType                                   string
	NetworkService                                *interface{}
	StatusCode                                    int64
	NetworkServicesCreate400ApplicationJSONObject *NetworkServicesCreate400ApplicationJSON
	NetworkServicesCreate401ApplicationJSONObject *NetworkServicesCreate401ApplicationJSON
	NetworkServicesCreate403ApplicationJSONObject *NetworkServicesCreate403ApplicationJSON
}
