package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkServiceChangeRequestDestroyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceChangeRequestDestroyRequest struct {
	PathParams NetworkServiceChangeRequestDestroyPathParams
}

type NetworkServiceChangeRequestDestroy400ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML NetworkServiceChangeRequestDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type NetworkServiceChangeRequestDestroy400ApplicationJSON struct {
	Detail   *string                                                      `json:"detail,omitempty"`
	Instance *string                                                      `json:"instance,omitempty"`
	Status   *interface{}                                                 `json:"status,omitempty"`
	Title    *interface{}                                                 `json:"title,omitempty"`
	Type     NetworkServiceChangeRequestDestroy400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestDestroy401ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceChangeRequestDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceChangeRequestDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceChangeRequestDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceChangeRequestDestroy401ApplicationJSON struct {
	Detail   *string                                                      `json:"detail,omitempty"`
	Instance *string                                                      `json:"instance,omitempty"`
	Status   *interface{}                                                 `json:"status,omitempty"`
	Title    *interface{}                                                 `json:"title,omitempty"`
	Type     NetworkServiceChangeRequestDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestDestroy403ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceChangeRequestDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceChangeRequestDestroy403ApplicationJSON struct {
	Detail   *string                                                      `json:"detail,omitempty"`
	Instance *string                                                      `json:"instance,omitempty"`
	Status   *interface{}                                                 `json:"status,omitempty"`
	Title    *interface{}                                                 `json:"title,omitempty"`
	Type     NetworkServiceChangeRequestDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestDestroy404ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServiceChangeRequestDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServiceChangeRequestDestroy404ApplicationJSON struct {
	Detail   *string                                                      `json:"detail,omitempty"`
	Instance *string                                                      `json:"instance,omitempty"`
	Status   *interface{}                                                 `json:"status,omitempty"`
	Title    *interface{}                                                 `json:"title,omitempty"`
	Type     NetworkServiceChangeRequestDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestDestroyResponse struct {
	ContentType                                                string
	NetworkServiceChangeRequest                                *shared.NetworkServiceChangeRequest
	StatusCode                                                 int64
	NetworkServiceChangeRequestDestroy400ApplicationJSONObject *NetworkServiceChangeRequestDestroy400ApplicationJSON
	NetworkServiceChangeRequestDestroy401ApplicationJSONObject *NetworkServiceChangeRequestDestroy401ApplicationJSON
	NetworkServiceChangeRequestDestroy403ApplicationJSONObject *NetworkServiceChangeRequestDestroy403ApplicationJSON
	NetworkServiceChangeRequestDestroy404ApplicationJSONObject *NetworkServiceChangeRequestDestroy404ApplicationJSON
}
