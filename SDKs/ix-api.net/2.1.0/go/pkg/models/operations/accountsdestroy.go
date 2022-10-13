package operations

import (
	"openapi/pkg/models/shared"
)

type AccountsDestroyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AccountsDestroyRequest struct {
	PathParams AccountsDestroyPathParams
}

type AccountsDestroy401ApplicationJSONTypeEnum string

const (
	AccountsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML AccountsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	AccountsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    AccountsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type AccountsDestroy401ApplicationJSON struct {
	Detail   *string                                   `json:"detail"`
	Instance *string                                   `json:"instance"`
	Status   *interface{}                              `json:"status"`
	Title    *interface{}                              `json:"title"`
	Type     AccountsDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type AccountsDestroy403ApplicationJSONTypeEnum string

const (
	AccountsDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML AccountsDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type AccountsDestroy403ApplicationJSON struct {
	Detail   *string                                   `json:"detail"`
	Instance *string                                   `json:"instance"`
	Status   *interface{}                              `json:"status"`
	Title    *interface{}                              `json:"title"`
	Type     AccountsDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type AccountsDestroy404ApplicationJSONTypeEnum string

const (
	AccountsDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML AccountsDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type AccountsDestroy404ApplicationJSON struct {
	Detail   *string                                   `json:"detail"`
	Instance *string                                   `json:"instance"`
	Status   *interface{}                              `json:"status"`
	Title    *interface{}                              `json:"title"`
	Type     AccountsDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type AccountsDestroyResponse struct {
	Account                                 *shared.Account
	ContentType                             string
	StatusCode                              int64
	AccountsDestroy401ApplicationJSONObject *AccountsDestroy401ApplicationJSON
	AccountsDestroy403ApplicationJSONObject *AccountsDestroy403ApplicationJSON
	AccountsDestroy404ApplicationJSONObject *AccountsDestroy404ApplicationJSON
}
