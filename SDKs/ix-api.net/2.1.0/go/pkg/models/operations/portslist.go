package operations

import (
	"openapi/pkg/models/shared"
)

type PortsListQueryParams struct {
	Connection  *string  `queryParam:"style=form,explode=true,name=connection"`
	Device      *string  `queryParam:"style=form,explode=true,name=device"`
	ExternalRef *string  `queryParam:"style=form,explode=true,name=external_ref"`
	ID          []string `queryParam:"style=form,explode=false,name=id"`
	MediaType   *string  `queryParam:"style=form,explode=true,name=media_type"`
	Name        *string  `queryParam:"style=form,explode=true,name=name"`
	Pop         *string  `queryParam:"style=form,explode=true,name=pop"`
	Speed       *string  `queryParam:"style=form,explode=true,name=speed"`
	State       *string  `queryParam:"style=form,explode=true,name=state"`
	StateIsNot  *string  `queryParam:"style=form,explode=true,name=state__is_not"`
}

type PortsListRequest struct {
	QueryParams PortsListQueryParams
}

type PortsList400ApplicationJSONTypeEnum string

const (
	PortsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML PortsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type PortsList400ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     PortsList400ApplicationJSONTypeEnum `json:"type"`
}

type PortsList401ApplicationJSONTypeEnum string

const (
	PortsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML PortsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	PortsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    PortsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type PortsList401ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     PortsList401ApplicationJSONTypeEnum `json:"type"`
}

type PortsList403ApplicationJSONTypeEnum string

const (
	PortsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML PortsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type PortsList403ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     PortsList403ApplicationJSONTypeEnum `json:"type"`
}

type PortsListResponse struct {
	ContentType                       string
	Ports                             []shared.Port
	StatusCode                        int64
	PortsList400ApplicationJSONObject *PortsList400ApplicationJSON
	PortsList401ApplicationJSONObject *PortsList401ApplicationJSON
	PortsList403ApplicationJSONObject *PortsList403ApplicationJSON
}
