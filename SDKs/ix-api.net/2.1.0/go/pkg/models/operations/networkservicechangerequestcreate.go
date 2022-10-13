package operations

import (
	"openapi/pkg/models/shared"
)

type NetworkServiceChangeRequestCreatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkServiceChangeRequestCreateRequest struct {
	PathParams NetworkServiceChangeRequestCreatePathParams
	Request    *shared.NetworkServiceChangeRequest `request:"mediaType=application/json"`
}

type NetworkServiceChangeRequestCreate400ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServiceChangeRequestCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServiceChangeRequestCreate400ApplicationJSON struct {
	Detail   *string                                                     `json:"detail"`
	Instance *string                                                     `json:"instance"`
	Status   *interface{}                                                `json:"status"`
	Title    *interface{}                                                `json:"title"`
	Type     NetworkServiceChangeRequestCreate400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestCreate401ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceChangeRequestCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceChangeRequestCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceChangeRequestCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceChangeRequestCreate401ApplicationJSON struct {
	Detail   *string                                                     `json:"detail"`
	Instance *string                                                     `json:"instance"`
	Status   *interface{}                                                `json:"status"`
	Title    *interface{}                                                `json:"title"`
	Type     NetworkServiceChangeRequestCreate401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestCreate403ApplicationJSONTypeEnum string

const (
	NetworkServiceChangeRequestCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceChangeRequestCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceChangeRequestCreate403ApplicationJSON struct {
	Detail   *string                                                     `json:"detail"`
	Instance *string                                                     `json:"instance"`
	Status   *interface{}                                                `json:"status"`
	Title    *interface{}                                                `json:"title"`
	Type     NetworkServiceChangeRequestCreate403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceChangeRequestCreateResponse struct {
	ContentType                                               string
	NetworkServiceChangeRequest                               *shared.NetworkServiceChangeRequest
	StatusCode                                                int64
	NetworkServiceChangeRequestCreate400ApplicationJSONObject *NetworkServiceChangeRequestCreate400ApplicationJSON
	NetworkServiceChangeRequestCreate401ApplicationJSONObject *NetworkServiceChangeRequestCreate401ApplicationJSON
	NetworkServiceChangeRequestCreate403ApplicationJSONObject *NetworkServiceChangeRequestCreate403ApplicationJSON
}
