package operations

import (
	"openapi/pkg/models/shared"
)

type MetroAreaNetworksReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MetroAreaNetworksReadRequest struct {
	PathParams MetroAreaNetworksReadPathParams
}

type MetroAreaNetworksRead401ApplicationJSONTypeEnum string

const (
	MetroAreaNetworksRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MetroAreaNetworksRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MetroAreaNetworksRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MetroAreaNetworksRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MetroAreaNetworksRead401ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     MetroAreaNetworksRead401ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreaNetworksRead403ApplicationJSONTypeEnum string

const (
	MetroAreaNetworksRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MetroAreaNetworksRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MetroAreaNetworksRead403ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     MetroAreaNetworksRead403ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreaNetworksRead404ApplicationJSONTypeEnum string

const (
	MetroAreaNetworksRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML MetroAreaNetworksRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type MetroAreaNetworksRead404ApplicationJSON struct {
	Detail   *string                                         `json:"detail,omitempty"`
	Instance *string                                         `json:"instance,omitempty"`
	Status   *interface{}                                    `json:"status,omitempty"`
	Title    *interface{}                                    `json:"title,omitempty"`
	Type     MetroAreaNetworksRead404ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreaNetworksReadResponse struct {
	ContentType                                   string
	MetroAreaNetwork                              *shared.MetroAreaNetwork
	StatusCode                                    int64
	MetroAreaNetworksRead401ApplicationJSONObject *MetroAreaNetworksRead401ApplicationJSON
	MetroAreaNetworksRead403ApplicationJSONObject *MetroAreaNetworksRead403ApplicationJSON
	MetroAreaNetworksRead404ApplicationJSONObject *MetroAreaNetworksRead404ApplicationJSON
}
