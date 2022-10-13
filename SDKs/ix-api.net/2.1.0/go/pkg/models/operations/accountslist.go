package operations

import (
	"openapi/pkg/models/shared"
)

type AccountsListQueryParams struct {
	Billable        *int64   `queryParam:"style=form,explode=true,name=billable"`
	ExternalRef     *string  `queryParam:"style=form,explode=true,name=external_ref"`
	ID              []string `queryParam:"style=form,explode=false,name=id"`
	ManagingAccount *string  `queryParam:"style=form,explode=true,name=managing_account"`
	Name            *string  `queryParam:"style=form,explode=true,name=name"`
	State           *string  `queryParam:"style=form,explode=true,name=state"`
	StateIsNot      *string  `queryParam:"style=form,explode=true,name=state__is_not"`
}

type AccountsListRequest struct {
	QueryParams AccountsListQueryParams
}

type AccountsList400ApplicationJSONTypeEnum string

const (
	AccountsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML AccountsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type AccountsList400ApplicationJSON struct {
	Detail   *string                                `json:"detail"`
	Instance *string                                `json:"instance"`
	Status   *interface{}                           `json:"status"`
	Title    *interface{}                           `json:"title"`
	Type     AccountsList400ApplicationJSONTypeEnum `json:"type"`
}

type AccountsList401ApplicationJSONTypeEnum string

const (
	AccountsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML AccountsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	AccountsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    AccountsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type AccountsList401ApplicationJSON struct {
	Detail   *string                                `json:"detail"`
	Instance *string                                `json:"instance"`
	Status   *interface{}                           `json:"status"`
	Title    *interface{}                           `json:"title"`
	Type     AccountsList401ApplicationJSONTypeEnum `json:"type"`
}

type AccountsList403ApplicationJSONTypeEnum string

const (
	AccountsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML AccountsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type AccountsList403ApplicationJSON struct {
	Detail   *string                                `json:"detail"`
	Instance *string                                `json:"instance"`
	Status   *interface{}                           `json:"status"`
	Title    *interface{}                           `json:"title"`
	Type     AccountsList403ApplicationJSONTypeEnum `json:"type"`
}

type AccountsListResponse struct {
	Accounts                             []shared.Account
	ContentType                          string
	StatusCode                           int64
	AccountsList400ApplicationJSONObject *AccountsList400ApplicationJSON
	AccountsList401ApplicationJSONObject *AccountsList401ApplicationJSON
	AccountsList403ApplicationJSONObject *AccountsList403ApplicationJSON
}
