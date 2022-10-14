package operations

import (
	"openapi/pkg/models/shared"
)

type DevicesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DevicesReadRequest struct {
	PathParams DevicesReadPathParams
}

type DevicesRead401ApplicationJSONTypeEnum string

const (
	DevicesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML DevicesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	DevicesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    DevicesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type DevicesRead401ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     DevicesRead401ApplicationJSONTypeEnum `json:"type"`
}

type DevicesRead403ApplicationJSONTypeEnum string

const (
	DevicesRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML DevicesRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type DevicesRead403ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     DevicesRead403ApplicationJSONTypeEnum `json:"type"`
}

type DevicesRead404ApplicationJSONTypeEnum string

const (
	DevicesRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML DevicesRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type DevicesRead404ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     DevicesRead404ApplicationJSONTypeEnum `json:"type"`
}

type DevicesReadResponse struct {
	ContentType                         string
	Device                              *shared.Device
	StatusCode                          int64
	DevicesRead401ApplicationJSONObject *DevicesRead401ApplicationJSON
	DevicesRead403ApplicationJSONObject *DevicesRead403ApplicationJSON
	DevicesRead404ApplicationJSONObject *DevicesRead404ApplicationJSON
}
