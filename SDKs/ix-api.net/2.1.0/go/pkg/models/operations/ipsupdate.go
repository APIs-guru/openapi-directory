package operations

import (
	"openapi/pkg/models/shared"
)

type IpsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type IpsUpdateRequest struct {
	PathParams IpsUpdatePathParams
	Request    *shared.IPAddressUpdate `request:"mediaType=application/json"`
}

type IpsUpdate400ApplicationJSONTypeEnum string

const (
	IpsUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML IpsUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type IpsUpdate400ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     IpsUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type IpsUpdate401ApplicationJSONTypeEnum string

const (
	IpsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML IpsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	IpsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    IpsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type IpsUpdate401ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     IpsUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type IpsUpdate403ApplicationJSONTypeEnum string

const (
	IpsUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML IpsUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type IpsUpdate403ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     IpsUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type IpsUpdate404ApplicationJSONTypeEnum string

const (
	IpsUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML IpsUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type IpsUpdate404ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     IpsUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type IpsUpdateResponse struct {
	ContentType                       string
	IPAddress                         *shared.IPAddress
	StatusCode                        int64
	IpsUpdate400ApplicationJSONObject *IpsUpdate400ApplicationJSON
	IpsUpdate401ApplicationJSONObject *IpsUpdate401ApplicationJSON
	IpsUpdate403ApplicationJSONObject *IpsUpdate403ApplicationJSON
	IpsUpdate404ApplicationJSONObject *IpsUpdate404ApplicationJSON
}
