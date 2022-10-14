package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsListQueryParams struct {
	ExternalRef      *string  `queryParam:"style=form,explode=true,name=external_ref"`
	Facility         *string  `queryParam:"style=form,explode=true,name=facility"`
	ID               []string `queryParam:"style=form,explode=false,name=id"`
	MetroAreaNetwork *string  `queryParam:"style=form,explode=true,name=metro_area_network"`
	Mode             *string  `queryParam:"style=form,explode=true,name=mode"`
	ModeIsNot        *string  `queryParam:"style=form,explode=true,name=mode__is_not"`
	Name             *string  `queryParam:"style=form,explode=true,name=name"`
	Pop              *string  `queryParam:"style=form,explode=true,name=pop"`
	State            *string  `queryParam:"style=form,explode=true,name=state"`
	StateIsNot       *string  `queryParam:"style=form,explode=true,name=state__is_not"`
}

type ConnectionsListRequest struct {
	QueryParams ConnectionsListQueryParams
}

type ConnectionsList400ApplicationJSONTypeEnum string

const (
	ConnectionsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML ConnectionsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type ConnectionsList400ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ConnectionsList400ApplicationJSONTypeEnum `json:"type"`
}

type ConnectionsList401ApplicationJSONTypeEnum string

const (
	ConnectionsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ConnectionsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ConnectionsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ConnectionsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ConnectionsList401ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ConnectionsList401ApplicationJSONTypeEnum `json:"type"`
}

type ConnectionsList403ApplicationJSONTypeEnum string

const (
	ConnectionsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ConnectionsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ConnectionsList403ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ConnectionsList403ApplicationJSONTypeEnum `json:"type"`
}

type ConnectionsListResponse struct {
	Connections                             []shared.Connection
	ContentType                             string
	StatusCode                              int64
	ConnectionsList400ApplicationJSONObject *ConnectionsList400ApplicationJSON
	ConnectionsList401ApplicationJSONObject *ConnectionsList401ApplicationJSON
	ConnectionsList403ApplicationJSONObject *ConnectionsList403ApplicationJSON
}
