package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkServiceChangeRequestReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceChangeRequestReadRequest struct {
	PathParams NetworkServiceChangeRequestReadPathParams
}

type NetworkServiceChangeRequestRead401ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceChangeRequestRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceChangeRequestRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceChangeRequestRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceChangeRequestRead401ApplicationJSON struct {
	Detail   *string                                                   `json:"detail,omitempty"`
	Instance *string                                                   `json:"instance,omitempty"`
	Status   *interface{}                                              `json:"status,omitempty"`
	Title    *interface{}                                              `json:"title,omitempty"`
	Type     NetworkServiceChangeRequestRead401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestRead403ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceChangeRequestRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceChangeRequestRead403ApplicationJSON struct {
	Detail   *string                                                   `json:"detail,omitempty"`
	Instance *string                                                   `json:"instance,omitempty"`
	Status   *interface{}                                              `json:"status,omitempty"`
	Title    *interface{}                                              `json:"title,omitempty"`
	Type     NetworkServiceChangeRequestRead403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestRead404ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServiceChangeRequestRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServiceChangeRequestRead404ApplicationJSON struct {
	Detail   *string                                                   `json:"detail,omitempty"`
	Instance *string                                                   `json:"instance,omitempty"`
	Status   *interface{}                                              `json:"status,omitempty"`
	Title    *interface{}                                              `json:"title,omitempty"`
	Type     NetworkServiceChangeRequestRead404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestReadResponse struct {
	ContentType                                             string
	NetworkServiceChangeRequest                             *shared.NetworkServiceChangeRequest
	StatusCode                                              int64
	NetworkServiceChangeRequestRead401ApplicationJSONObject *NetworkServiceChangeRequestRead401ApplicationJSON
	NetworkServiceChangeRequestRead403ApplicationJSONObject *NetworkServiceChangeRequestRead403ApplicationJSON
	NetworkServiceChangeRequestRead404ApplicationJSONObject *NetworkServiceChangeRequestRead404ApplicationJSON
}
