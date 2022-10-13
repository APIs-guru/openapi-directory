package operations

import (
	"openapi/pkg/models/shared"
)

type IpsListQueryParams struct {
	ConsumingAccount     *string  `queryParam:"style=form,explode=true,name=consuming_account"`
	ExternalRef          *string  `queryParam:"style=form,explode=true,name=external_ref"`
	Fqdn                 *string  `queryParam:"style=form,explode=true,name=fqdn"`
	ID                   []string `queryParam:"style=form,explode=false,name=id"`
	ManagingAccount      *string  `queryParam:"style=form,explode=true,name=managing_account"`
	NetworkFeature       *string  `queryParam:"style=form,explode=true,name=network_feature"`
	NetworkFeatureConfig *string  `queryParam:"style=form,explode=true,name=network_feature_config"`
	NetworkService       *string  `queryParam:"style=form,explode=true,name=network_service"`
	NetworkServiceConfig *string  `queryParam:"style=form,explode=true,name=network_service_config"`
	PrefixLength         *int64   `queryParam:"style=form,explode=true,name=prefix_length"`
	ValidNotAfter        *string  `queryParam:"style=form,explode=true,name=valid_not_after"`
	ValidNotBefore       *string  `queryParam:"style=form,explode=true,name=valid_not_before"`
	Version              *int64   `queryParam:"style=form,explode=true,name=version"`
}

type IpsListRequest struct {
	QueryParams IpsListQueryParams
}

type IpsList400ApplicationJSONTypeEnum string

const (
	IpsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML IpsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type IpsList400ApplicationJSON struct {
	Detail   *string                           `json:"detail"`
	Instance *string                           `json:"instance"`
	Status   *interface{}                      `json:"status"`
	Title    *interface{}                      `json:"title"`
	Type     IpsList400ApplicationJSONTypeEnum `json:"type"`
}

type IpsList401ApplicationJSONTypeEnum string

const (
	IpsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML IpsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	IpsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    IpsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type IpsList401ApplicationJSON struct {
	Detail   *string                           `json:"detail"`
	Instance *string                           `json:"instance"`
	Status   *interface{}                      `json:"status"`
	Title    *interface{}                      `json:"title"`
	Type     IpsList401ApplicationJSONTypeEnum `json:"type"`
}

type IpsList403ApplicationJSONTypeEnum string

const (
	IpsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML IpsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type IpsList403ApplicationJSON struct {
	Detail   *string                           `json:"detail"`
	Instance *string                           `json:"instance"`
	Status   *interface{}                      `json:"status"`
	Title    *interface{}                      `json:"title"`
	Type     IpsList403ApplicationJSONTypeEnum `json:"type"`
}

type IpsListResponse struct {
	ContentType                     string
	IPAddresses                     []shared.IPAddress
	StatusCode                      int64
	IpsList400ApplicationJSONObject *IpsList400ApplicationJSON
	IpsList401ApplicationJSONObject *IpsList401ApplicationJSON
	IpsList403ApplicationJSONObject *IpsList403ApplicationJSON
}
