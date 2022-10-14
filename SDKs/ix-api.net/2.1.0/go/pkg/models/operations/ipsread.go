package operations

import (
	"openapi/pkg/models/shared"
)

type IpsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type IpsReadRequest struct {
	PathParams IpsReadPathParams
}

type IpsRead401ApplicationJSONTypeEnum string

const (
	IpsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML IpsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	IpsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    IpsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type IpsRead401ApplicationJSON struct {
	Detail   *string                           `json:"detail,omitempty"`
	Instance *string                           `json:"instance,omitempty"`
	Status   *interface{}                      `json:"status,omitempty"`
	Title    *interface{}                      `json:"title,omitempty"`
	Type     IpsRead401ApplicationJSONTypeEnum `json:"type"`
}

type IpsRead403ApplicationJSONTypeEnum string

const (
	IpsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML IpsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type IpsRead403ApplicationJSON struct {
	Detail   *string                           `json:"detail,omitempty"`
	Instance *string                           `json:"instance,omitempty"`
	Status   *interface{}                      `json:"status,omitempty"`
	Title    *interface{}                      `json:"title,omitempty"`
	Type     IpsRead403ApplicationJSONTypeEnum `json:"type"`
}

type IpsRead404ApplicationJSONTypeEnum string

const (
	IpsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML IpsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type IpsRead404ApplicationJSON struct {
	Detail   *string                           `json:"detail,omitempty"`
	Instance *string                           `json:"instance,omitempty"`
	Status   *interface{}                      `json:"status,omitempty"`
	Title    *interface{}                      `json:"title,omitempty"`
	Type     IpsRead404ApplicationJSONTypeEnum `json:"type"`
}

type IpsReadResponse struct {
	ContentType                     string
	IPAddress                       *shared.IPAddress
	StatusCode                      int64
	IpsRead401ApplicationJSONObject *IpsRead401ApplicationJSON
	IpsRead403ApplicationJSONObject *IpsRead403ApplicationJSON
	IpsRead404ApplicationJSONObject *IpsRead404ApplicationJSON
}
