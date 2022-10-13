package operations

import (
	"openapi/pkg/models/shared"
)

type MetroAreaNetworksListQueryParams struct {
	ID              []string `queryParam:"style=form,explode=false,name=id"`
	MetroArea       *string  `queryParam:"style=form,explode=true,name=metro_area"`
	Name            *string  `queryParam:"style=form,explode=true,name=name"`
	ServiceProvider *string  `queryParam:"style=form,explode=true,name=service_provider"`
}

type MetroAreaNetworksListRequest struct {
	QueryParams MetroAreaNetworksListQueryParams
}

type MetroAreaNetworksList400ApplicationJSONTypeEnum string

const (
	MetroAreaNetworksList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML MetroAreaNetworksList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type MetroAreaNetworksList400ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     MetroAreaNetworksList400ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreaNetworksList401ApplicationJSONTypeEnum string

const (
	MetroAreaNetworksList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MetroAreaNetworksList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MetroAreaNetworksList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MetroAreaNetworksList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MetroAreaNetworksList401ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     MetroAreaNetworksList401ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreaNetworksList403ApplicationJSONTypeEnum string

const (
	MetroAreaNetworksList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MetroAreaNetworksList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MetroAreaNetworksList403ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     MetroAreaNetworksList403ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreaNetworksListResponse struct {
	ContentType                                   string
	MetroAreaNetworks                             []shared.MetroAreaNetwork
	StatusCode                                    int64
	MetroAreaNetworksList400ApplicationJSONObject *MetroAreaNetworksList400ApplicationJSON
	MetroAreaNetworksList401ApplicationJSONObject *MetroAreaNetworksList401ApplicationJSON
	MetroAreaNetworksList403ApplicationJSONObject *MetroAreaNetworksList403ApplicationJSON
}
