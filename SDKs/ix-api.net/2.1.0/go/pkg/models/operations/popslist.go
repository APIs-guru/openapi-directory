package operations

import (
	"openapi/pkg/models/shared"
)

type PopsListQueryParams struct {
	CapabilityMediaType *string  `queryParam:"style=form,explode=true,name=capability_media_type"`
	CapabilitySpeed     *int64   `queryParam:"style=form,explode=true,name=capability_speed"`
	CapabilitySpeedGt   *int64   `queryParam:"style=form,explode=true,name=capability_speed__gt"`
	CapabilitySpeedGte  *int64   `queryParam:"style=form,explode=true,name=capability_speed__gte"`
	CapabilitySpeedLt   *int64   `queryParam:"style=form,explode=true,name=capability_speed__lt"`
	CapabilitySpeedLte  *int64   `queryParam:"style=form,explode=true,name=capability_speed__lte"`
	Facility            *string  `queryParam:"style=form,explode=true,name=facility"`
	ID                  []string `queryParam:"style=form,explode=false,name=id"`
	MetroAreaNetwork    *string  `queryParam:"style=form,explode=true,name=metro_area_network"`
}

type PopsListRequest struct {
	QueryParams PopsListQueryParams
}

type PopsList400ApplicationJSONTypeEnum string

const (
	PopsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML PopsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type PopsList400ApplicationJSON struct {
	Detail   *string                            `json:"detail"`
	Instance *string                            `json:"instance"`
	Status   *interface{}                       `json:"status"`
	Title    *interface{}                       `json:"title"`
	Type     PopsList400ApplicationJSONTypeEnum `json:"type"`
}

type PopsList401ApplicationJSONTypeEnum string

const (
	PopsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML PopsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	PopsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    PopsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type PopsList401ApplicationJSON struct {
	Detail   *string                            `json:"detail"`
	Instance *string                            `json:"instance"`
	Status   *interface{}                       `json:"status"`
	Title    *interface{}                       `json:"title"`
	Type     PopsList401ApplicationJSONTypeEnum `json:"type"`
}

type PopsList403ApplicationJSONTypeEnum string

const (
	PopsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML PopsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type PopsList403ApplicationJSON struct {
	Detail   *string                            `json:"detail"`
	Instance *string                            `json:"instance"`
	Status   *interface{}                       `json:"status"`
	Title    *interface{}                       `json:"title"`
	Type     PopsList403ApplicationJSONTypeEnum `json:"type"`
}

type PopsListResponse struct {
	ContentType                      string
	PointOfPresences                 []shared.PointOfPresence
	StatusCode                       int64
	PopsList400ApplicationJSONObject *PopsList400ApplicationJSON
	PopsList401ApplicationJSONObject *PopsList401ApplicationJSON
	PopsList403ApplicationJSONObject *PopsList403ApplicationJSON
}
