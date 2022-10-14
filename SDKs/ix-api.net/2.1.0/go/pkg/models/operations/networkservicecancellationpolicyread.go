package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkServiceCancellationPolicyReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceCancellationPolicyReadQueryParams struct {
	DecommissionAt *string `queryParam:"style=form,explode=true,name=decommission_at"`
}

type NetworkServiceCancellationPolicyReadRequest struct {
	PathParams  NetworkServiceCancellationPolicyReadPathParams
	QueryParams NetworkServiceCancellationPolicyReadQueryParams
}

type NetworkServiceCancellationPolicyRead401ApplicationJSONTypeEnum string

const (
	NetworkServiceCancellationPolicyRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceCancellationPolicyRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceCancellationPolicyRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceCancellationPolicyRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceCancellationPolicyRead401ApplicationJSON struct {
	Detail   *string                                                        `json:"detail,omitempty"`
	Instance *string                                                        `json:"instance,omitempty"`
	Status   *interface{}                                                   `json:"status,omitempty"`
	Title    *interface{}                                                   `json:"title,omitempty"`
	Type     NetworkServiceCancellationPolicyRead401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceCancellationPolicyRead403ApplicationJSONTypeEnum string

const (
	NetworkServiceCancellationPolicyRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceCancellationPolicyRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceCancellationPolicyRead403ApplicationJSON struct {
	Detail   *string                                                        `json:"detail,omitempty"`
	Instance *string                                                        `json:"instance,omitempty"`
	Status   *interface{}                                                   `json:"status,omitempty"`
	Title    *interface{}                                                   `json:"title,omitempty"`
	Type     NetworkServiceCancellationPolicyRead403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceCancellationPolicyRead404ApplicationJSONTypeEnum string

const (
	NetworkServiceCancellationPolicyRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkServiceCancellationPolicyRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkServiceCancellationPolicyRead404ApplicationJSON struct {
	Detail   *string                                                        `json:"detail,omitempty"`
	Instance *string                                                        `json:"instance,omitempty"`
	Status   *interface{}                                                   `json:"status,omitempty"`
	Title    *interface{}                                                   `json:"title,omitempty"`
	Type     NetworkServiceCancellationPolicyRead404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceCancellationPolicyReadResponse struct {
	CancellationPolicy                                           *shared.CancellationPolicy
	ContentType                                                  string
	StatusCode                                                   int64
	NetworkServiceCancellationPolicyRead401ApplicationJSONObject *NetworkServiceCancellationPolicyRead401ApplicationJSON
	NetworkServiceCancellationPolicyRead403ApplicationJSONObject *NetworkServiceCancellationPolicyRead403ApplicationJSON
	NetworkServiceCancellationPolicyRead404ApplicationJSONObject *NetworkServiceCancellationPolicyRead404ApplicationJSON
}
