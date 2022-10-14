package operations

import (
	"openapi/pkg/models/shared"
)

type FacilitiesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FacilitiesReadRequest struct {
	PathParams FacilitiesReadPathParams
}

type FacilitiesRead401ApplicationJSONTypeEnum string

const (
	FacilitiesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML FacilitiesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	FacilitiesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    FacilitiesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type FacilitiesRead401ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     FacilitiesRead401ApplicationJSONTypeEnum `json:"type"`
}

type FacilitiesRead403ApplicationJSONTypeEnum string

const (
	FacilitiesRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML FacilitiesRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type FacilitiesRead403ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     FacilitiesRead403ApplicationJSONTypeEnum `json:"type"`
}

type FacilitiesRead404ApplicationJSONTypeEnum string

const (
	FacilitiesRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML FacilitiesRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type FacilitiesRead404ApplicationJSON struct {
	Detail   *string                                  `json:"detail,omitempty"`
	Instance *string                                  `json:"instance,omitempty"`
	Status   *interface{}                             `json:"status,omitempty"`
	Title    *interface{}                             `json:"title,omitempty"`
	Type     FacilitiesRead404ApplicationJSONTypeEnum `json:"type"`
}

type FacilitiesReadResponse struct {
	ContentType                            string
	Facilities                             []shared.Facility
	StatusCode                             int64
	FacilitiesRead401ApplicationJSONObject *FacilitiesRead401ApplicationJSON
	FacilitiesRead403ApplicationJSONObject *FacilitiesRead403ApplicationJSON
	FacilitiesRead404ApplicationJSONObject *FacilitiesRead404ApplicationJSON
}
