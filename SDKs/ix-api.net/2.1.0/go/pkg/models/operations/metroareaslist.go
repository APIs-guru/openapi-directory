package operations

import (
	"openapi/pkg/models/shared"
)

type MetroAreasListQueryParams struct {
	ID []string `queryParam:"style=form,explode=false,name=id"`
}

type MetroAreasListRequest struct {
	QueryParams MetroAreasListQueryParams
}

type MetroAreasList400ApplicationJSONTypeEnum string

const (
	MetroAreasList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML MetroAreasList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type MetroAreasList400ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     MetroAreasList400ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreasList401ApplicationJSONTypeEnum string

const (
	MetroAreasList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML MetroAreasList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	MetroAreasList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    MetroAreasList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type MetroAreasList401ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     MetroAreasList401ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreasList403ApplicationJSONTypeEnum string

const (
	MetroAreasList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML MetroAreasList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type MetroAreasList403ApplicationJSON struct {
	Detail   *string                                  `json:"detail"`
	Instance *string                                  `json:"instance"`
	Status   *interface{}                             `json:"status"`
	Title    *interface{}                             `json:"title"`
	Type     MetroAreasList403ApplicationJSONTypeEnum `json:"type"`
}

type MetroAreasListResponse struct {
	ContentType                            string
	MetroAreas                             []shared.MetroArea
	StatusCode                             int64
	MetroAreasList400ApplicationJSONObject *MetroAreasList400ApplicationJSON
	MetroAreasList401ApplicationJSONObject *MetroAreasList401ApplicationJSON
	MetroAreasList403ApplicationJSONObject *MetroAreasList403ApplicationJSON
}
