package operations

import (
	"openapi/pkg/models/shared"
)

type MacsDestroyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MacsDestroyRequest struct {
	PathParams MacsDestroyPathParams
}

type MacsDestroy400ApplicationJSONTypeEnum string

const (
	MacsDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML MacsDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type MacsDestroy400ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     MacsDestroy400ApplicationJSONTypeEnum `json:"type"`
}

type MacsDestroy401ApplicationJSONTypeEnum string

const (
	MacsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MacsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MacsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MacsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MacsDestroy401ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     MacsDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type MacsDestroy403ApplicationJSONTypeEnum string

const (
	MacsDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MacsDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MacsDestroy403ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     MacsDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type MacsDestroy404ApplicationJSONTypeEnum string

const (
	MacsDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML MacsDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type MacsDestroy404ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     MacsDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type MacsDestroyResponse struct {
	ContentType                         string
	MacAddress                          *shared.MacAddress
	StatusCode                          int64
	MacsDestroy400ApplicationJSONObject *MacsDestroy400ApplicationJSON
	MacsDestroy401ApplicationJSONObject *MacsDestroy401ApplicationJSON
	MacsDestroy403ApplicationJSONObject *MacsDestroy403ApplicationJSON
	MacsDestroy404ApplicationJSONObject *MacsDestroy404ApplicationJSON
}
