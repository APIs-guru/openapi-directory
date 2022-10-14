package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ContactsUpdateRequest struct {
	PathParams ContactsUpdatePathParams
	Request    *shared.ContactRequest `request:"mediaType=application/json"`
}

type ContactsUpdate400ApplicationJSONTypeEnum string

const (
	ContactsUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML ContactsUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type ContactsUpdate400ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     ContactsUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type ContactsUpdate401ApplicationJSONTypeEnum string

const (
	ContactsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ContactsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ContactsUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ContactsUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ContactsUpdate401ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     ContactsUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type ContactsUpdate403ApplicationJSONTypeEnum string

const (
	ContactsUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ContactsUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ContactsUpdate403ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     ContactsUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type ContactsUpdate404ApplicationJSONTypeEnum string

const (
	ContactsUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML ContactsUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type ContactsUpdate404ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     ContactsUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type ContactsUpdateResponse struct {
	Contact                                *shared.Contact
	ContentType                            string
	StatusCode                             int64
	ContactsUpdate400ApplicationJSONObject *ContactsUpdate400ApplicationJSON
	ContactsUpdate401ApplicationJSONObject *ContactsUpdate401ApplicationJSON
	ContactsUpdate403ApplicationJSONObject *ContactsUpdate403ApplicationJSON
	ContactsUpdate404ApplicationJSONObject *ContactsUpdate404ApplicationJSON
}
