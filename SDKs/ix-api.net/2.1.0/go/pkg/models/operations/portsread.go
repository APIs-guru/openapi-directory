package operations

import (
	"openapi/pkg/models/shared"
)

type PortsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PortsReadRequest struct {
	PathParams PortsReadPathParams
}

type PortsRead401ApplicationJSONTypeEnum string

const (
	PortsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML PortsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	PortsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    PortsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type PortsRead401ApplicationJSON struct {
	Detail   *string                             `json:"detail,omitempty"`
	Instance *string                             `json:"instance,omitempty"`
	Status   *interface{}                        `json:"status,omitempty"`
	Title    *interface{}                        `json:"title,omitempty"`
	Type     PortsRead401ApplicationJSONTypeEnum `json:"type"`
}

type PortsRead403ApplicationJSONTypeEnum string

const (
	PortsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML PortsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type PortsRead403ApplicationJSON struct {
	Detail   *string                             `json:"detail,omitempty"`
	Instance *string                             `json:"instance,omitempty"`
	Status   *interface{}                        `json:"status,omitempty"`
	Title    *interface{}                        `json:"title,omitempty"`
	Type     PortsRead403ApplicationJSONTypeEnum `json:"type"`
}

type PortsRead404ApplicationJSONTypeEnum string

const (
	PortsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML PortsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type PortsRead404ApplicationJSON struct {
	Detail   *string                             `json:"detail,omitempty"`
	Instance *string                             `json:"instance,omitempty"`
	Status   *interface{}                        `json:"status,omitempty"`
	Title    *interface{}                        `json:"title,omitempty"`
	Type     PortsRead404ApplicationJSONTypeEnum `json:"type"`
}

type PortsReadResponse struct {
	ContentType                       string
	Port                              *shared.Port
	StatusCode                        int64
	PortsRead401ApplicationJSONObject *PortsRead401ApplicationJSON
	PortsRead403ApplicationJSONObject *PortsRead403ApplicationJSON
	PortsRead404ApplicationJSONObject *PortsRead404ApplicationJSON
}
