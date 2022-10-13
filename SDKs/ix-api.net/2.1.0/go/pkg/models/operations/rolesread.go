package operations

import (
	"openapi/pkg/models/shared"
)

type RolesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RolesReadQueryParams struct {
	ID   []string `queryParam:"style=form,explode=false,name=id"`
	Name *string  `queryParam:"style=form,explode=true,name=name"`
}

type RolesReadRequest struct {
	PathParams  RolesReadPathParams
	QueryParams RolesReadQueryParams
}

type RolesRead401ApplicationJSONTypeEnum string

const (
	RolesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML RolesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	RolesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    RolesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type RolesRead401ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     RolesRead401ApplicationJSONTypeEnum `json:"type"`
}

type RolesReadResponse struct {
	ContentType                       string
	Role                              *shared.Role
	StatusCode                        int64
	RolesRead401ApplicationJSONObject *RolesRead401ApplicationJSON
}
