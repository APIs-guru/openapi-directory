package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsCreateRequest struct {
	Request *shared.ContactRequest `request:"mediaType=application/json"`
}

type ContactsCreate400ApplicationJSONTypeEnum string

const (
	ContactsCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML ContactsCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type ContactsCreate400ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     ContactsCreate400ApplicationJSONTypeEnum `json:"type"`
}

type ContactsCreate401ApplicationJSONTypeEnum string

const (
	ContactsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ContactsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ContactsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ContactsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ContactsCreate401ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     ContactsCreate401ApplicationJSONTypeEnum `json:"type"`
}

type ContactsCreate403ApplicationJSONTypeEnum string

const (
	ContactsCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ContactsCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ContactsCreate403ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     ContactsCreate403ApplicationJSONTypeEnum `json:"type"`
}

type ContactsCreateResponse struct {
	Contact                                *shared.Contact
	ContentType                            string
	StatusCode                             int64
	ContactsCreate400ApplicationJSONObject *ContactsCreate400ApplicationJSON
	ContactsCreate401ApplicationJSONObject *ContactsCreate401ApplicationJSON
	ContactsCreate403ApplicationJSONObject *ContactsCreate403ApplicationJSON
}
