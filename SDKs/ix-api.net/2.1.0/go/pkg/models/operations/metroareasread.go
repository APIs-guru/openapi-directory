package operations

import (
	"openapi/pkg/models/shared"
)

type MetroAreasReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MetroAreasReadRequest struct {
	PathParams MetroAreasReadPathParams
}

type MetroAreasRead401ApplicationJSONTypeEnum string

const (
	MetroAreasRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MetroAreasRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MetroAreasRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MetroAreasRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MetroAreasRead401ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     MetroAreasRead401ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreasRead403ApplicationJSONTypeEnum string

const (
	MetroAreasRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MetroAreasRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MetroAreasRead403ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     MetroAreasRead403ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreasRead404ApplicationJSONTypeEnum string

const (
	MetroAreasRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML MetroAreasRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type MetroAreasRead404ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     MetroAreasRead404ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreasReadResponse struct {
	ContentType                            string
	MetroAreas                             []shared.MetroArea
	StatusCode                             int64
	MetroAreasRead401ApplicationJSONObject *MetroAreasRead401ApplicationJSON
	MetroAreasRead403ApplicationJSONObject *MetroAreasRead403ApplicationJSON
	MetroAreasRead404ApplicationJSONObject *MetroAreasRead404ApplicationJSON
}
