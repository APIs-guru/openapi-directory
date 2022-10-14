package operations

import (
	"openapi/pkg/models/shared"
)

type AccountsCreateRequest struct {
	Request *shared.AccountRequest `request:"mediaType=application/json"`
}

type AccountsCreate400ApplicationJSONTypeEnum string

const (
	AccountsCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML AccountsCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type AccountsCreate400ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     AccountsCreate400ApplicationJSONTypeEnum `json:"type"`
}

type AccountsCreate401ApplicationJSONTypeEnum string

const (
	AccountsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML AccountsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	AccountsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    AccountsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type AccountsCreate401ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     AccountsCreate401ApplicationJSONTypeEnum `json:"type"`
}

type AccountsCreate403ApplicationJSONTypeEnum string

const (
	AccountsCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML AccountsCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type AccountsCreate403ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     AccountsCreate403ApplicationJSONTypeEnum `json:"type"`
}

type AccountsCreateResponse struct {
	Account                                *shared.Account
	ContentType                            string
	StatusCode                             int64
	AccountsCreate400ApplicationJSONObject *AccountsCreate400ApplicationJSON
	AccountsCreate401ApplicationJSONObject *AccountsCreate401ApplicationJSON
	AccountsCreate403ApplicationJSONObject *AccountsCreate403ApplicationJSON
}
