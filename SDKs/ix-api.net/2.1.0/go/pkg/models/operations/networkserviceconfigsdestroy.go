package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type NetworkServiceConfigsDestroyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceConfigsDestroyRequest struct {
	PathParams NetworkServiceConfigsDestroyPathParams
	Request    *shared.CancellationRequest `request:"mediaType=application/json"`
}

type NetworkServiceConfigsDestroy400ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2CancellationPolicyErrorHTML NetworkServiceConfigsDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/cancellation-policy-error.html"
	NetworkServiceConfigsDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML         NetworkServiceConfigsDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type NetworkServiceConfigsDestroy400ApplicationJSON struct {
	ChargedUntil   *time.Time                                             `json:"charged_until,omitempty"`
	DecommissionAt *time.Time                                             `json:"decommission_at,omitempty"`
	Detail         *string                                                `json:"detail,omitempty"`
	Instance       *string                                                `json:"instance,omitempty"`
	Status         *interface{}                                           `json:"status,omitempty"`
	Title          *interface{}                                           `json:"title,omitempty"`
	Type           NetworkServiceConfigsDestroy400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsDestroy401ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceConfigsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceConfigsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceConfigsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceConfigsDestroy401ApplicationJSON struct {
	Detail   *string                                                `json:"detail,omitempty"`
	Instance *string                                                `json:"instance,omitempty"`
	Status   *interface{}                                           `json:"status,omitempty"`
	Title    *interface{}                                           `json:"title,omitempty"`
	Type     NetworkServiceConfigsDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsDestroy403ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceConfigsDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceConfigsDestroy403ApplicationJSON struct {
	Detail   *string                                                `json:"detail,omitempty"`
	Instance *string                                                `json:"instance,omitempty"`
	Status   *interface{}                                           `json:"status,omitempty"`
	Title    *interface{}                                           `json:"title,omitempty"`
	Type     NetworkServiceConfigsDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsDestroy404ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServiceConfigsDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServiceConfigsDestroy404ApplicationJSON struct {
	Detail   *string                                                `json:"detail,omitempty"`
	Instance *string                                                `json:"instance,omitempty"`
	Status   *interface{}                                           `json:"status,omitempty"`
	Title    *interface{}                                           `json:"title,omitempty"`
	Type     NetworkServiceConfigsDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsDestroyResponse struct {
	ContentType                                          string
	NetworkServiceConfig                                 *interface{}
	StatusCode                                           int64
	NetworkServiceConfigsDestroy400ApplicationJSONObject *NetworkServiceConfigsDestroy400ApplicationJSON
	NetworkServiceConfigsDestroy401ApplicationJSONObject *NetworkServiceConfigsDestroy401ApplicationJSON
	NetworkServiceConfigsDestroy403ApplicationJSONObject *NetworkServiceConfigsDestroy403ApplicationJSON
	NetworkServiceConfigsDestroy404ApplicationJSONObject *NetworkServiceConfigsDestroy404ApplicationJSON
}
