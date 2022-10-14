package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkServiceConfigCancellationPolicyReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceConfigCancellationPolicyReadQueryParams struct {
	DecommissionAt *string `queryParam:"style=form,explode=true,name=decommission_at"`
}

type NetworkServiceConfigCancellationPolicyReadRequest struct {
	PathParams  NetworkServiceConfigCancellationPolicyReadPathParams
	QueryParams NetworkServiceConfigCancellationPolicyReadQueryParams
}

type NetworkServiceConfigCancellationPolicyRead401ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigCancellationPolicyRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceConfigCancellationPolicyRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceConfigCancellationPolicyRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceConfigCancellationPolicyRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceConfigCancellationPolicyRead401ApplicationJSON struct {
	Detail   *string                                                              `json:"detail,omitempty"`
	Instance *string                                                              `json:"instance,omitempty"`
	Status   *interface{}                                                         `json:"status,omitempty"`
	Title    *interface{}                                                         `json:"title,omitempty"`
	Type     NetworkServiceConfigCancellationPolicyRead401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigCancellationPolicyRead403ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigCancellationPolicyRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceConfigCancellationPolicyRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceConfigCancellationPolicyRead403ApplicationJSON struct {
	Detail   *string                                                              `json:"detail,omitempty"`
	Instance *string                                                              `json:"instance,omitempty"`
	Status   *interface{}                                                         `json:"status,omitempty"`
	Title    *interface{}                                                         `json:"title,omitempty"`
	Type     NetworkServiceConfigCancellationPolicyRead403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigCancellationPolicyRead404ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigCancellationPolicyRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServiceConfigCancellationPolicyRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServiceConfigCancellationPolicyRead404ApplicationJSON struct {
	Detail   *string                                                              `json:"detail,omitempty"`
	Instance *string                                                              `json:"instance,omitempty"`
	Status   *interface{}                                                         `json:"status,omitempty"`
	Title    *interface{}                                                         `json:"title,omitempty"`
	Type     NetworkServiceConfigCancellationPolicyRead404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigCancellationPolicyReadResponse struct {
	CancellationPolicy                                                 *shared.CancellationPolicy
	ContentType                                                        string
	StatusCode                                                         int64
	NetworkServiceConfigCancellationPolicyRead401ApplicationJSONObject *NetworkServiceConfigCancellationPolicyRead401ApplicationJSON
	NetworkServiceConfigCancellationPolicyRead403ApplicationJSONObject *NetworkServiceConfigCancellationPolicyRead403ApplicationJSON
	NetworkServiceConfigCancellationPolicyRead404ApplicationJSONObject *NetworkServiceConfigCancellationPolicyRead404ApplicationJSON
}
