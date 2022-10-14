package operations

import (
	"openapi/pkg/models/shared"
)

type AccountsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AccountsReadRequest struct {
	PathParams AccountsReadPathParams
}

type AccountsRead401ApplicationJSONTypeEnum string

const (
	AccountsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML AccountsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	AccountsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    AccountsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type AccountsRead401ApplicationJSON struct {
	Detail   *string                                `json:"detail,omitempty"`
	Instance *string                                `json:"instance,omitempty"`
	Status   *interface{}                           `json:"status,omitempty"`
	Title    *interface{}                           `json:"title,omitempty"`
	Type     AccountsRead401ApplicationJSONTypeEnum `json:"type"`
}

type AccountsRead403ApplicationJSONTypeEnum string

const (
	AccountsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML AccountsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type AccountsRead403ApplicationJSON struct {
	Detail   *string                                `json:"detail,omitempty"`
	Instance *string                                `json:"instance,omitempty"`
	Status   *interface{}                           `json:"status,omitempty"`
	Title    *interface{}                           `json:"title,omitempty"`
	Type     AccountsRead403ApplicationJSONTypeEnum `json:"type"`
}

type AccountsRead404ApplicationJSONTypeEnum string

const (
	AccountsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML AccountsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type AccountsRead404ApplicationJSON struct {
	Detail   *string                                `json:"detail,omitempty"`
	Instance *string                                `json:"instance,omitempty"`
	Status   *interface{}                           `json:"status,omitempty"`
	Title    *interface{}                           `json:"title,omitempty"`
	Type     AccountsRead404ApplicationJSONTypeEnum `json:"type"`
}

type AccountsReadResponse struct {
	Account                              *shared.Account
	ContentType                          string
	StatusCode                           int64
	AccountsRead401ApplicationJSONObject *AccountsRead401ApplicationJSON
	AccountsRead403ApplicationJSONObject *AccountsRead403ApplicationJSON
	AccountsRead404ApplicationJSONObject *AccountsRead404ApplicationJSON
}
