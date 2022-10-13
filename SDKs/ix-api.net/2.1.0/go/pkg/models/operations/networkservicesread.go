package operations

type NetworkServicesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServicesReadRequest struct {
	PathParams NetworkServicesReadPathParams
}

type NetworkServicesRead401ApplicationJSONTypeEnum string

const (
	NetworkServicesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServicesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServicesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServicesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServicesRead401ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkServicesRead401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesRead403ApplicationJSONTypeEnum string

const (
	NetworkServicesRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServicesRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServicesRead403ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkServicesRead403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesRead404ApplicationJSONTypeEnum string

const (
	NetworkServicesRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServicesRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServicesRead404ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkServicesRead404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesReadResponse struct {
	ContentType                                 string
	NetworkService                              *interface{}
	StatusCode                                  int64
	NetworkServicesRead401ApplicationJSONObject *NetworkServicesRead401ApplicationJSON
	NetworkServicesRead403ApplicationJSONObject *NetworkServicesRead403ApplicationJSON
	NetworkServicesRead404ApplicationJSONObject *NetworkServicesRead404ApplicationJSON
}
