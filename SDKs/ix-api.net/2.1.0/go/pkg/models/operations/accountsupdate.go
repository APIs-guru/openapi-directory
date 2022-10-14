package operations

import (
	"openapi/pkg/models/shared"
)

type AccountsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AccountsUpdateRequest struct {
	PathParams AccountsUpdatePathParams
	Request    *shared.AccountUpdate `request:"mediaType=application/json"`
}

type AccountsUpdate400ApplicationJSONTypeEnum string

const (
	AccountsUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML AccountsUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type AccountsUpdate400ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     AccountsUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type AccountsUpdate401ApplicationJSONTypeEnum string

const (
	AccountsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML AccountsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	AccountsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    AccountsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type AccountsUpdate401ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     AccountsUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type AccountsUpdate403ApplicationJSONTypeEnum string

const (
	AccountsUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML AccountsUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type AccountsUpdate403ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     AccountsUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type AccountsUpdate404ApplicationJSONTypeEnum string

const (
	AccountsUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML AccountsUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type AccountsUpdate404ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     AccountsUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type AccountsUpdateResponse struct {
	Account                                *shared.Account
	ContentType                            string
	StatusCode                             int64
	AccountsUpdate400ApplicationJSONObject *AccountsUpdate400ApplicationJSON
	AccountsUpdate401ApplicationJSONObject *AccountsUpdate401ApplicationJSON
	AccountsUpdate403ApplicationJSONObject *AccountsUpdate403ApplicationJSON
	AccountsUpdate404ApplicationJSONObject *AccountsUpdate404ApplicationJSON
}
