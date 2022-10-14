package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsDestroyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ContactsDestroyRequest struct {
	PathParams ContactsDestroyPathParams
}

type ContactsDestroy400ApplicationJSONTypeEnum string

const (
	ContactsDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML ContactsDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type ContactsDestroy400ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ContactsDestroy400ApplicationJSONTypeEnum `json:"type"`
}

type ContactsDestroy401ApplicationJSONTypeEnum string

const (
	ContactsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ContactsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ContactsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ContactsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ContactsDestroy401ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ContactsDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type ContactsDestroy403ApplicationJSONTypeEnum string

const (
	ContactsDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ContactsDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ContactsDestroy403ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ContactsDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type ContactsDestroy404ApplicationJSONTypeEnum string

const (
	ContactsDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML ContactsDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type ContactsDestroy404ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ContactsDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type ContactsDestroyResponse struct {
	Contact                                 *shared.Contact
	ContentType                             string
	StatusCode                              int64
	ContactsDestroy400ApplicationJSONObject *ContactsDestroy400ApplicationJSON
	ContactsDestroy401ApplicationJSONObject *ContactsDestroy401ApplicationJSON
	ContactsDestroy403ApplicationJSONObject *ContactsDestroy403ApplicationJSON
	ContactsDestroy404ApplicationJSONObject *ContactsDestroy404ApplicationJSON
}
