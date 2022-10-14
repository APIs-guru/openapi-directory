package operations

import (
	"openapi/pkg/models/shared"
)

type AccountsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AccountsPartialUpdateRequest struct {
	PathParams AccountsPartialUpdatePathParams
	Request    *shared.AccountUpdatePartial `request:"mediaType=application/merge-patch+json"`
}

type AccountsPartialUpdate400ApplicationJSONTypeEnum string

const (
	AccountsPartialUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML AccountsPartialUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type AccountsPartialUpdate400ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     AccountsPartialUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type AccountsPartialUpdate401ApplicationJSONTypeEnum string

const (
	AccountsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML AccountsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	AccountsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    AccountsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type AccountsPartialUpdate401ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     AccountsPartialUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type AccountsPartialUpdate403ApplicationJSONTypeEnum string

const (
	AccountsPartialUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML AccountsPartialUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type AccountsPartialUpdate403ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     AccountsPartialUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type AccountsPartialUpdate404ApplicationJSONTypeEnum string

const (
	AccountsPartialUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML AccountsPartialUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type AccountsPartialUpdate404ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     AccountsPartialUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type AccountsPartialUpdateResponse struct {
	Account                                       *shared.Account
	ContentType                                   string
	StatusCode                                    int64
	AccountsPartialUpdate400ApplicationJSONObject *AccountsPartialUpdate400ApplicationJSON
	AccountsPartialUpdate401ApplicationJSONObject *AccountsPartialUpdate401ApplicationJSON
	AccountsPartialUpdate403ApplicationJSONObject *AccountsPartialUpdate403ApplicationJSON
	AccountsPartialUpdate404ApplicationJSONObject *AccountsPartialUpdate404ApplicationJSON
}
