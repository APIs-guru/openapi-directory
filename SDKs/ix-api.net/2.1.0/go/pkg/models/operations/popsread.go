package operations

import (
	"openapi/pkg/models/shared"
)

type PopsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PopsReadRequest struct {
	PathParams PopsReadPathParams
}

type PopsRead401ApplicationJSONTypeEnum string

const (
	PopsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML PopsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	PopsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    PopsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type PopsRead401ApplicationJSON struct {
	Detail   *string                            `json:"detail"`
	Instance *string                            `json:"instance"`
	Status   *interface{}                       `json:"status"`
	Title    *interface{}                       `json:"title"`
	Type     PopsRead401ApplicationJSONTypeEnum `json:"type"`
}

type PopsRead403ApplicationJSONTypeEnum string

const (
	PopsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML PopsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type PopsRead403ApplicationJSON struct {
	Detail   *string                            `json:"detail"`
	Instance *string                            `json:"instance"`
	Status   *interface{}                       `json:"status"`
	Title    *interface{}                       `json:"title"`
	Type     PopsRead403ApplicationJSONTypeEnum `json:"type"`
}

type PopsRead404ApplicationJSONTypeEnum string

const (
	PopsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML PopsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type PopsRead404ApplicationJSON struct {
	Detail   *string                            `json:"detail"`
	Instance *string                            `json:"instance"`
	Status   *interface{}                       `json:"status"`
	Title    *interface{}                       `json:"title"`
	Type     PopsRead404ApplicationJSONTypeEnum `json:"type"`
}

type PopsReadResponse struct {
	ContentType                      string
	PointOfPresence                  *shared.PointOfPresence
	StatusCode                       int64
	PopsRead401ApplicationJSONObject *PopsRead401ApplicationJSON
	PopsRead403ApplicationJSONObject *PopsRead403ApplicationJSON
	PopsRead404ApplicationJSONObject *PopsRead404ApplicationJSON
}
