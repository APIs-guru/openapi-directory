package operations

type NetworkServiceConfigsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceConfigsReadRequest struct {
	PathParams NetworkServiceConfigsReadPathParams
}

type NetworkServiceConfigsRead401ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceConfigsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceConfigsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceConfigsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceConfigsRead401ApplicationJSON struct {
	Detail   *string                                             `json:"detail"`
	Instance *string                                             `json:"instance"`
	Status   *interface{}                                        `json:"status"`
	Title    *interface{}                                        `json:"title"`
	Type     NetworkServiceConfigsRead401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsRead403ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceConfigsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceConfigsRead403ApplicationJSON struct {
	Detail   *string                                             `json:"detail"`
	Instance *string                                             `json:"instance"`
	Status   *interface{}                                        `json:"status"`
	Title    *interface{}                                        `json:"title"`
	Type     NetworkServiceConfigsRead403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsRead404ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServiceConfigsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServiceConfigsRead404ApplicationJSON struct {
	Detail   *string                                             `json:"detail"`
	Instance *string                                             `json:"instance"`
	Status   *interface{}                                        `json:"status"`
	Title    *interface{}                                        `json:"title"`
	Type     NetworkServiceConfigsRead404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsReadResponse struct {
	ContentType                                       string
	NetworkServiceConfig                              *interface{}
	StatusCode                                        int64
	NetworkServiceConfigsRead401ApplicationJSONObject *NetworkServiceConfigsRead401ApplicationJSON
	NetworkServiceConfigsRead403ApplicationJSONObject *NetworkServiceConfigsRead403ApplicationJSON
	NetworkServiceConfigsRead404ApplicationJSONObject *NetworkServiceConfigsRead404ApplicationJSON
}
