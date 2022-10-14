package operations

import (
	"openapi/pkg/models/shared"
)

type RoleAssignmentsDestroyPathParams struct {
	AssignmentID string `pathParam:"style=simple,explode=false,name=assignment_id"`
}

type RoleAssignmentsDestroyRequest struct {
	PathParams RoleAssignmentsDestroyPathParams
}

type RoleAssignmentsDestroy400ApplicationJSONTypeEnum string

const (
	RoleAssignmentsDestroy400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML RoleAssignmentsDestroy400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type RoleAssignmentsDestroy400ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     RoleAssignmentsDestroy400ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsDestroy401ApplicationJSONTypeEnum string

const (
	RoleAssignmentsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML RoleAssignmentsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	RoleAssignmentsDestroy401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    RoleAssignmentsDestroy401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type RoleAssignmentsDestroy401ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     RoleAssignmentsDestroy401ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsDestroy403ApplicationJSONTypeEnum string

const (
	RoleAssignmentsDestroy403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML RoleAssignmentsDestroy403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type RoleAssignmentsDestroy403ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     RoleAssignmentsDestroy403ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsDestroy404ApplicationJSONTypeEnum string

const (
	RoleAssignmentsDestroy404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML RoleAssignmentsDestroy404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type RoleAssignmentsDestroy404ApplicationJSON struct {
	Detail   *string                                          `json:"detail,omitempty"`
	Instance *string                                          `json:"instance,omitempty"`
	Status   *interface{}                                     `json:"status,omitempty"`
	Title    *interface{}                                     `json:"title,omitempty"`
	Type     RoleAssignmentsDestroy404ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsDestroyResponse struct {
	ContentType                                    string
	RoleAssignment                                 *shared.RoleAssignment
	StatusCode                                     int64
	RoleAssignmentsDestroy400ApplicationJSONObject *RoleAssignmentsDestroy400ApplicationJSON
	RoleAssignmentsDestroy401ApplicationJSONObject *RoleAssignmentsDestroy401ApplicationJSON
	RoleAssignmentsDestroy403ApplicationJSONObject *RoleAssignmentsDestroy403ApplicationJSON
	RoleAssignmentsDestroy404ApplicationJSONObject *RoleAssignmentsDestroy404ApplicationJSON
}
