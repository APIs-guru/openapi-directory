package operations

import (
	"openapi/pkg/models/shared"
)

type RoleAssignmentsListQueryParams struct {
	Contact *string  `queryParam:"style=form,explode=true,name=contact"`
	ID      []string `queryParam:"style=form,explode=false,name=id"`
	Role    *string  `queryParam:"style=form,explode=true,name=role"`
}

type RoleAssignmentsListRequest struct {
	QueryParams RoleAssignmentsListQueryParams
}

type RoleAssignmentsList400ApplicationJSONTypeEnum string

const (
	RoleAssignmentsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML RoleAssignmentsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type RoleAssignmentsList400ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     RoleAssignmentsList400ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsList401ApplicationJSONTypeEnum string

const (
	RoleAssignmentsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML RoleAssignmentsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	RoleAssignmentsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    RoleAssignmentsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type RoleAssignmentsList401ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     RoleAssignmentsList401ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsList403ApplicationJSONTypeEnum string

const (
	RoleAssignmentsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML RoleAssignmentsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type RoleAssignmentsList403ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     RoleAssignmentsList403ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsListResponse struct {
	ContentType                                 string
	RoleAssignments                             []shared.RoleAssignment
	StatusCode                                  int64
	RoleAssignmentsList400ApplicationJSONObject *RoleAssignmentsList400ApplicationJSON
	RoleAssignmentsList401ApplicationJSONObject *RoleAssignmentsList401ApplicationJSON
	RoleAssignmentsList403ApplicationJSONObject *RoleAssignmentsList403ApplicationJSON
}
