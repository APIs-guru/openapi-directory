package operations

import (
	"openapi/pkg/models/shared"
)

type MacsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MacsReadRequest struct {
	PathParams MacsReadPathParams
}

type MacsRead401ApplicationJSONTypeEnum string

const (
	MacsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MacsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MacsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MacsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MacsRead401ApplicationJSON struct {
	Detail   *string                            `json:"detail,omitempty"`
	Instance *string                            `json:"instance,omitempty"`
	Status   *interface{}                       `json:"status,omitempty"`
	Title    *interface{}                       `json:"title,omitempty"`
	Type     MacsRead401ApplicationJSONTypeEnum `json:"type"`
}

type MacsRead403ApplicationJSONTypeEnum string

const (
	MacsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MacsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MacsRead403ApplicationJSON struct {
	Detail   *string                            `json:"detail,omitempty"`
	Instance *string                            `json:"instance,omitempty"`
	Status   *interface{}                       `json:"status,omitempty"`
	Title    *interface{}                       `json:"title,omitempty"`
	Type     MacsRead403ApplicationJSONTypeEnum `json:"type"`
}

type MacsRead404ApplicationJSONTypeEnum string

const (
	MacsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML MacsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type MacsRead404ApplicationJSON struct {
	Detail   *string                            `json:"detail,omitempty"`
	Instance *string                            `json:"instance,omitempty"`
	Status   *interface{}                       `json:"status,omitempty"`
	Title    *interface{}                       `json:"title,omitempty"`
	Type     MacsRead404ApplicationJSONTypeEnum `json:"type"`
}

type MacsReadResponse struct {
	ContentType                      string
	MacAddress                       *shared.MacAddress
	StatusCode                       int64
	MacsRead401ApplicationJSONObject *MacsRead401ApplicationJSON
	MacsRead403ApplicationJSONObject *MacsRead403ApplicationJSON
	MacsRead404ApplicationJSONObject *MacsRead404ApplicationJSON
}
