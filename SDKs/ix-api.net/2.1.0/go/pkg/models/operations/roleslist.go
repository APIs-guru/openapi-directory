package operations

import (
	"openapi/pkg/models/shared"
)

type RolesListQueryParams struct {
	Contact *string  `queryParam:"style=form,explode=true,name=contact"`
	ID      []string `queryParam:"style=form,explode=false,name=id"`
	Name    *string  `queryParam:"style=form,explode=true,name=name"`
}

type RolesListRequest struct {
	QueryParams RolesListQueryParams
}

type RolesList401ApplicationJSONTypeEnum string

const (
	RolesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML RolesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	RolesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    RolesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type RolesList401ApplicationJSON struct {
	Detail   *string                             `json:"detail"`
	Instance *string                             `json:"instance"`
	Status   *interface{}                        `json:"status"`
	Title    *interface{}                        `json:"title"`
	Type     RolesList401ApplicationJSONTypeEnum `json:"type"`
}

type RolesListResponse struct {
	ContentType                       string
	Roles                             []shared.Role
	StatusCode                        int64
	RolesList401ApplicationJSONObject *RolesList401ApplicationJSON
}
