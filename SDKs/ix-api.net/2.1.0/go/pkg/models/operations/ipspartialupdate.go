package operations

import (
	"openapi/pkg/models/shared"
)

type IpsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type IpsPartialUpdateRequest struct {
	PathParams IpsPartialUpdatePathParams
	Request    *shared.IPAddressUpdatePartial `request:"mediaType=application/merge-patch+json"`
}

type IpsPartialUpdate400ApplicationJSONTypeEnum string

const (
	IpsPartialUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML IpsPartialUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type IpsPartialUpdate400ApplicationJSON struct {
	Detail   *string                                    `json:"detail,omitempty"`
	Instance *string                                    `json:"instance,omitempty"`
	Status   *interface{}                               `json:"status,omitempty"`
	Title    *interface{}                               `json:"title,omitempty"`
	Type     IpsPartialUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type IpsPartialUpdate401ApplicationJSONTypeEnum string

const (
	IpsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML IpsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	IpsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    IpsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type IpsPartialUpdate401ApplicationJSON struct {
	Detail   *string                                    `json:"detail,omitempty"`
	Instance *string                                    `json:"instance,omitempty"`
	Status   *interface{}                               `json:"status,omitempty"`
	Title    *interface{}                               `json:"title,omitempty"`
	Type     IpsPartialUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type IpsPartialUpdate403ApplicationJSONTypeEnum string

const (
	IpsPartialUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML IpsPartialUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type IpsPartialUpdate403ApplicationJSON struct {
	Detail   *string                                    `json:"detail,omitempty"`
	Instance *string                                    `json:"instance,omitempty"`
	Status   *interface{}                               `json:"status,omitempty"`
	Title    *interface{}                               `json:"title,omitempty"`
	Type     IpsPartialUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type IpsPartialUpdate404ApplicationJSONTypeEnum string

const (
	IpsPartialUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML IpsPartialUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type IpsPartialUpdate404ApplicationJSON struct {
	Detail   *string                                    `json:"detail,omitempty"`
	Instance *string                                    `json:"instance,omitempty"`
	Status   *interface{}                               `json:"status,omitempty"`
	Title    *interface{}                               `json:"title,omitempty"`
	Type     IpsPartialUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type IpsPartialUpdateResponse struct {
	ContentType                              string
	IPAddress                                *shared.IPAddress
	StatusCode                               int64
	IpsPartialUpdate400ApplicationJSONObject *IpsPartialUpdate400ApplicationJSON
	IpsPartialUpdate401ApplicationJSONObject *IpsPartialUpdate401ApplicationJSON
	IpsPartialUpdate403ApplicationJSONObject *IpsPartialUpdate403ApplicationJSON
	IpsPartialUpdate404ApplicationJSONObject *IpsPartialUpdate404ApplicationJSON
}
