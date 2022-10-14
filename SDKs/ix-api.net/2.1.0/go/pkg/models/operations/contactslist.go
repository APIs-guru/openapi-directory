package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsListQueryParams struct {
	ConsumingAccount *string  `queryParam:"style=form,explode=true,name=consuming_account"`
	ExternalRef      *string  `queryParam:"style=form,explode=true,name=external_ref"`
	ID               []string `queryParam:"style=form,explode=false,name=id"`
	ManagingAccount  *string  `queryParam:"style=form,explode=true,name=managing_account"`
}

type ContactsListRequest struct {
	QueryParams ContactsListQueryParams
}

type ContactsList400ApplicationJSONTypeEnum string

const (
	ContactsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML ContactsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type ContactsList400ApplicationJSON struct {
	Detail   *string                                `json:"detail,omitempty"`
	Instance *string                                `json:"instance,omitempty"`
	Status   *interface{}                           `json:"status,omitempty"`
	Title    *interface{}                           `json:"title,omitempty"`
	Type     ContactsList400ApplicationJSONTypeEnum `json:"type"`
}

type ContactsList401ApplicationJSONTypeEnum string

const (
	ContactsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ContactsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ContactsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ContactsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ContactsList401ApplicationJSON struct {
	Detail   *string                                `json:"detail,omitempty"`
	Instance *string                                `json:"instance,omitempty"`
	Status   *interface{}                           `json:"status,omitempty"`
	Title    *interface{}                           `json:"title,omitempty"`
	Type     ContactsList401ApplicationJSONTypeEnum `json:"type"`
}

type ContactsList403ApplicationJSONTypeEnum string

const (
	ContactsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ContactsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ContactsList403ApplicationJSON struct {
	Detail   *string                                `json:"detail,omitempty"`
	Instance *string                                `json:"instance,omitempty"`
	Status   *interface{}                           `json:"status,omitempty"`
	Title    *interface{}                           `json:"title,omitempty"`
	Type     ContactsList403ApplicationJSONTypeEnum `json:"type"`
}

type ContactsListResponse struct {
	Contacts                             []shared.Contact
	ContentType                          string
	StatusCode                           int64
	ContactsList400ApplicationJSONObject *ContactsList400ApplicationJSON
	ContactsList401ApplicationJSONObject *ContactsList401ApplicationJSON
	ContactsList403ApplicationJSONObject *ContactsList403ApplicationJSON
}
