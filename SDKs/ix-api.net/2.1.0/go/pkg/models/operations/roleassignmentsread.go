package operations

import (
	"openapi/pkg/models/shared"
)

type RoleAssignmentsReadPathParams struct {
	AssignmentID string `pathParam:"style=simple,explode=false,name=assignment_id"`
}

type RoleAssignmentsReadRequest struct {
	PathParams RoleAssignmentsReadPathParams
}

type RoleAssignmentsRead401ApplicationJSONTypeEnum string

const (
	RoleAssignmentsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML RoleAssignmentsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	RoleAssignmentsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    RoleAssignmentsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type RoleAssignmentsRead401ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     RoleAssignmentsRead401ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsRead403ApplicationJSONTypeEnum string

const (
	RoleAssignmentsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML RoleAssignmentsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type RoleAssignmentsRead403ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     RoleAssignmentsRead403ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsRead404ApplicationJSONTypeEnum string

const (
	RoleAssignmentsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML RoleAssignmentsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type RoleAssignmentsRead404ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     RoleAssignmentsRead404ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsReadResponse struct {
	ContentType                                 string
	RoleAssignment                              *shared.RoleAssignment
	StatusCode                                  int64
	RoleAssignmentsRead401ApplicationJSONObject *RoleAssignmentsRead401ApplicationJSON
	RoleAssignmentsRead403ApplicationJSONObject *RoleAssignmentsRead403ApplicationJSON
	RoleAssignmentsRead404ApplicationJSONObject *RoleAssignmentsRead404ApplicationJSON
}
