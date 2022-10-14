package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type NetworkServicesDestroyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServicesDestroyRequest struct {
	PathParams NetworkServicesDestroyPathParams
	Request    *shared.CancellationRequest `request:"mediaType=application/json"`
}

type NetworkServicesDestroy400ApplicationJSONTypeEnum string

const (
	NetworkServicesDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2CancellationPolicyErrorHTML NetworkServicesDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/cancellation-policy-error.html"
	NetworkServicesDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML         NetworkServicesDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type NetworkServicesDestroy400ApplicationJSON struct {
	ChargedUntil   *time.Time                                       `json:"charged_until,omitempty"`
	DecommissionAt *time.Time                                       `json:"decommission_at,omitempty"`
	Detail         *string                                          `json:"detail,omitempty"`
	Instance       *string                                          `json:"instance,omitempty"`
	Status         *interface{}                                     `json:"status,omitempty"`
	Title          *interface{}                                     `json:"title,omitempty"`
	Type           NetworkServicesDestroy400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesDestroy401ApplicationJSONTypeEnum string

const (
	NetworkServicesDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServicesDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServicesDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServicesDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServicesDestroy401ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     NetworkServicesDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesDestroy403ApplicationJSONTypeEnum string

const (
	NetworkServicesDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServicesDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServicesDestroy403ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     NetworkServicesDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesDestroy404ApplicationJSONTypeEnum string

const (
	NetworkServicesDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServicesDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServicesDestroy404ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     NetworkServicesDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesDestroyResponse struct {
	ContentType                                    string
	NetworkService                                 *interface{}
	StatusCode                                     int64
	NetworkServicesDestroy400ApplicationJSONObject *NetworkServicesDestroy400ApplicationJSON
	NetworkServicesDestroy401ApplicationJSONObject *NetworkServicesDestroy401ApplicationJSON
	NetworkServicesDestroy403ApplicationJSONObject *NetworkServicesDestroy403ApplicationJSON
	NetworkServicesDestroy404ApplicationJSONObject *NetworkServicesDestroy404ApplicationJSON
}
