package operations

import (
	"openapi/pkg/models/shared"
)

type DevicesListQueryParams struct {
	CapabilityMediaType *string  `queryParam:"style=form,explode=true,name=capability_media_type"`
	CapabilitySpeed     *int64   `queryParam:"style=form,explode=true,name=capability_speed"`
	CapabilitySpeedGt   *int64   `queryParam:"style=form,explode=true,name=capability_speed__gt"`
	CapabilitySpeedGte  *int64   `queryParam:"style=form,explode=true,name=capability_speed__gte"`
	CapabilitySpeedLt   *int64   `queryParam:"style=form,explode=true,name=capability_speed__lt"`
	CapabilitySpeedLte  *int64   `queryParam:"style=form,explode=true,name=capability_speed__lte"`
	Facility            *string  `queryParam:"style=form,explode=true,name=facility"`
	ID                  []string `queryParam:"style=form,explode=false,name=id"`
	MetroAreaNetwork    *string  `queryParam:"style=form,explode=true,name=metro_area_network"`
	Name                *string  `queryParam:"style=form,explode=true,name=name"`
	Pop                 *string  `queryParam:"style=form,explode=true,name=pop"`
}

type DevicesListRequest struct {
	QueryParams DevicesListQueryParams
}

type DevicesList400ApplicationJSONTypeEnum string

const (
	DevicesList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML DevicesList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type DevicesList400ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     DevicesList400ApplicationJSONTypeEnum `json:"type"`
}

type DevicesList401ApplicationJSONTypeEnum string

const (
	DevicesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML DevicesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	DevicesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    DevicesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type DevicesList401ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     DevicesList401ApplicationJSONTypeEnum `json:"type"`
}

type DevicesList403ApplicationJSONTypeEnum string

const (
	DevicesList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML DevicesList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type DevicesList403ApplicationJSON struct {
	Detail   *string                               `json:"detail,omitempty"`
	Instance *string                               `json:"instance,omitempty"`
	Status   *interface{}                          `json:"status,omitempty"`
	Title    *interface{}                          `json:"title,omitempty"`
	Type     DevicesList403ApplicationJSONTypeEnum `json:"type"`
}

type DevicesListResponse struct {
	ContentType                         string
	Devices                             []shared.Device
	StatusCode                          int64
	DevicesList400ApplicationJSONObject *DevicesList400ApplicationJSON
	DevicesList401ApplicationJSONObject *DevicesList401ApplicationJSON
	DevicesList403ApplicationJSONObject *DevicesList403ApplicationJSON
}
