package operations

import (
	"openapi/pkg/models/shared"
)

type MacsListQueryParams struct {
	Address              *string  `queryParam:"style=form,explode=true,name=address"`
	AssignedAt           *string  `queryParam:"style=form,explode=true,name=assigned_at"`
	ConsumingAccount     *string  `queryParam:"style=form,explode=true,name=consuming_account"`
	ExternalRef          *string  `queryParam:"style=form,explode=true,name=external_ref"`
	ID                   []string `queryParam:"style=form,explode=false,name=id"`
	ManagingAccount      *string  `queryParam:"style=form,explode=true,name=managing_account"`
	NetworkServiceConfig *string  `queryParam:"style=form,explode=true,name=network_service_config"`
	ValidNotAfter        *string  `queryParam:"style=form,explode=true,name=valid_not_after"`
	ValidNotBefore       *string  `queryParam:"style=form,explode=true,name=valid_not_before"`
}

type MacsListRequest struct {
	QueryParams MacsListQueryParams
}

type MacsList400ApplicationJSONTypeEnum string

const (
	MacsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML MacsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type MacsList400ApplicationJSON struct {
	Detail   *string                            `json:"detail,omitempty"`
	Instance *string                            `json:"instance,omitempty"`
	Status   *interface{}                       `json:"status,omitempty"`
	Title    *interface{}                       `json:"title,omitempty"`
	Type     MacsList400ApplicationJSONTypeEnum `json:"type"`
}

type MacsList401ApplicationJSONTypeEnum string

const (
	MacsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MacsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MacsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MacsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MacsList401ApplicationJSON struct {
	Detail   *string                            `json:"detail,omitempty"`
	Instance *string                            `json:"instance,omitempty"`
	Status   *interface{}                       `json:"status,omitempty"`
	Title    *interface{}                       `json:"title,omitempty"`
	Type     MacsList401ApplicationJSONTypeEnum `json:"type"`
}

type MacsList403ApplicationJSONTypeEnum string

const (
	MacsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MacsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MacsList403ApplicationJSON struct {
	Detail   *string                            `json:"detail,omitempty"`
	Instance *string                            `json:"instance,omitempty"`
	Status   *interface{}                       `json:"status,omitempty"`
	Title    *interface{}                       `json:"title,omitempty"`
	Type     MacsList403ApplicationJSONTypeEnum `json:"type"`
}

type MacsListResponse struct {
	ContentType                      string
	MacAddresses                     []shared.MacAddress
	StatusCode                       int64
	MacsList400ApplicationJSONObject *MacsList400ApplicationJSON
	MacsList401ApplicationJSONObject *MacsList401ApplicationJSON
	MacsList403ApplicationJSONObject *MacsList403ApplicationJSON
}
