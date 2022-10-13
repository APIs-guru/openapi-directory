package operations

import (
	"openapi/pkg/models/shared"
)

type MacsCreateRequest struct {
	Request *shared.MacAddressRequest `request:"mediaType=application/json"`
}

type MacsCreate400ApplicationJSONTypeEnum string

const (
	MacsCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML MacsCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type MacsCreate400ApplicationJSON struct {
	Detail   *string                              `json:"detail"`
	Instance *string                              `json:"instance"`
	Status   *interface{}                         `json:"status"`
	Title    *interface{}                         `json:"title"`
	Type     MacsCreate400ApplicationJSONTypeEnum `json:"type"`
}

type MacsCreate401ApplicationJSONTypeEnum string

const (
	MacsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MacsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MacsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MacsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MacsCreate401ApplicationJSON struct {
	Detail   *string                              `json:"detail"`
	Instance *string                              `json:"instance"`
	Status   *interface{}                         `json:"status"`
	Title    *interface{}                         `json:"title"`
	Type     MacsCreate401ApplicationJSONTypeEnum `json:"type"`
}

type MacsCreate403ApplicationJSONTypeEnum string

const (
	MacsCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MacsCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MacsCreate403ApplicationJSON struct {
	Detail   *string                              `json:"detail"`
	Instance *string                              `json:"instance"`
	Status   *interface{}                         `json:"status"`
	Title    *interface{}                         `json:"title"`
	Type     MacsCreate403ApplicationJSONTypeEnum `json:"type"`
}

type MacsCreateResponse struct {
	ContentType                        string
	MacAddress                         *shared.MacAddress
	StatusCode                         int64
	MacsCreate400ApplicationJSONObject *MacsCreate400ApplicationJSON
	MacsCreate401ApplicationJSONObject *MacsCreate401ApplicationJSON
	MacsCreate403ApplicationJSONObject *MacsCreate403ApplicationJSON
}
