package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ContactsPartialUpdateRequest struct {
	PathParams ContactsPartialUpdatePathParams
	Request    *shared.ContactRequestPartial `request:"mediaType=application/merge-patch+json"`
}

type ContactsPartialUpdate400ApplicationJSONTypeEnum string

const (
	ContactsPartialUpdate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML ContactsPartialUpdate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type ContactsPartialUpdate400ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     ContactsPartialUpdate400ApplicationJSONTypeEnum `json:"type"`
}

type ContactsPartialUpdate401ApplicationJSONTypeEnum string

const (
	ContactsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ContactsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ContactsPartialUpdate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ContactsPartialUpdate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ContactsPartialUpdate401ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     ContactsPartialUpdate401ApplicationJSONTypeEnum `json:"type"`
}

type ContactsPartialUpdate403ApplicationJSONTypeEnum string

const (
	ContactsPartialUpdate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ContactsPartialUpdate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ContactsPartialUpdate403ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     ContactsPartialUpdate403ApplicationJSONTypeEnum `json:"type"`
}

type ContactsPartialUpdate404ApplicationJSONTypeEnum string

const (
	ContactsPartialUpdate404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML ContactsPartialUpdate404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type ContactsPartialUpdate404ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     ContactsPartialUpdate404ApplicationJSONTypeEnum `json:"type"`
}

type ContactsPartialUpdateResponse struct {
	Contact                                       *shared.Contact
	ContentType                                   string
	StatusCode                                    int64
	ContactsPartialUpdate400ApplicationJSONObject *ContactsPartialUpdate400ApplicationJSON
	ContactsPartialUpdate401ApplicationJSONObject *ContactsPartialUpdate401ApplicationJSON
	ContactsPartialUpdate403ApplicationJSONObject *ContactsPartialUpdate403ApplicationJSON
	ContactsPartialUpdate404ApplicationJSONObject *ContactsPartialUpdate404ApplicationJSON
}
