package operations

import (
	"openapi/pkg/models/shared"
)

type FacilitiesListQueryParams struct {
	AddressCountry      *string  `queryParam:"style=form,explode=true,name=address_country"`
	AddressLocality     *string  `queryParam:"style=form,explode=true,name=address_locality"`
	CapabilityMediaType *string  `queryParam:"style=form,explode=true,name=capability_media_type"`
	CapabilitySpeed     *int64   `queryParam:"style=form,explode=true,name=capability_speed"`
	CapabilitySpeedGt   *int64   `queryParam:"style=form,explode=true,name=capability_speed__gt"`
	CapabilitySpeedGte  *int64   `queryParam:"style=form,explode=true,name=capability_speed__gte"`
	CapabilitySpeedLt   *int64   `queryParam:"style=form,explode=true,name=capability_speed__lt"`
	CapabilitySpeedLte  *int64   `queryParam:"style=form,explode=true,name=capability_speed__lte"`
	ID                  []string `queryParam:"style=form,explode=false,name=id"`
	MetroArea           *string  `queryParam:"style=form,explode=true,name=metro_area"`
	MetroAreaNetwork    *string  `queryParam:"style=form,explode=true,name=metro_area_network"`
	OrganisationName    *string  `queryParam:"style=form,explode=true,name=organisation_name"`
	PostalCode          *string  `queryParam:"style=form,explode=true,name=postal_code"`
}

type FacilitiesListRequest struct {
	QueryParams FacilitiesListQueryParams
}

type FacilitiesList400ApplicationJSONTypeEnum string

const (
	FacilitiesList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML FacilitiesList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type FacilitiesList400ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     FacilitiesList400ApplicationJSONTypeEnum `json:"type"`
}

type FacilitiesList401ApplicationJSONTypeEnum string

const (
	FacilitiesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML FacilitiesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	FacilitiesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    FacilitiesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type FacilitiesList401ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     FacilitiesList401ApplicationJSONTypeEnum `json:"type"`
}

type FacilitiesList403ApplicationJSONTypeEnum string

const (
	FacilitiesList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML FacilitiesList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type FacilitiesList403ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     FacilitiesList403ApplicationJSONTypeEnum `json:"type"`
}

type FacilitiesListResponse struct {
	ContentType                            string
	Facilities                             []shared.Facility
	StatusCode                             int64
	FacilitiesList400ApplicationJSONObject *FacilitiesList400ApplicationJSON
	FacilitiesList401ApplicationJSONObject *FacilitiesList401ApplicationJSON
	FacilitiesList403ApplicationJSONObject *FacilitiesList403ApplicationJSON
}
