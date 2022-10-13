package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ContactsReadRequest struct {
	PathParams ContactsReadPathParams
}

type ContactsRead401ApplicationJSONTypeEnum string

const (
	ContactsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ContactsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ContactsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ContactsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ContactsRead401ApplicationJSON struct {
	Detail   *string                                `json:"detail"`
	Instance *string                                `json:"instance"`
	Status   *interface{}                           `json:"status"`
	Title    *interface{}                           `json:"title"`
	Type     ContactsRead401ApplicationJSONTypeEnum `json:"type"`
}

type ContactsRead403ApplicationJSONTypeEnum string

const (
	ContactsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ContactsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ContactsRead403ApplicationJSON struct {
	Detail   *string                                `json:"detail"`
	Instance *string                                `json:"instance"`
	Status   *interface{}                           `json:"status"`
	Title    *interface{}                           `json:"title"`
	Type     ContactsRead403ApplicationJSONTypeEnum `json:"type"`
}

type ContactsRead404ApplicationJSONTypeEnum string

const (
	ContactsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML ContactsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type ContactsRead404ApplicationJSON struct {
	Detail   *string                                `json:"detail"`
	Instance *string                                `json:"instance"`
	Status   *interface{}                           `json:"status"`
	Title    *interface{}                           `json:"title"`
	Type     ContactsRead404ApplicationJSONTypeEnum `json:"type"`
}

type ContactsReadResponse struct {
	Contact                              *shared.Contact
	ContentType                          string
	StatusCode                           int64
	ContactsRead401ApplicationJSONObject *ContactsRead401ApplicationJSON
	ContactsRead403ApplicationJSONObject *ContactsRead403ApplicationJSON
	ContactsRead404ApplicationJSONObject *ContactsRead404ApplicationJSON
}
