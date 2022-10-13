package operations

import (
	"openapi/pkg/models/shared"
)

type RoleAssignmentsCreateRequest struct {
	Request *shared.RoleAssignmentRequest `request:"mediaType=application/json"`
}

type RoleAssignmentsCreate400ApplicationJSONTypeEnum string

const (
	RoleAssignmentsCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML RoleAssignmentsCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
	RoleAssignmentsCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2UnableToFulfillHTML RoleAssignmentsCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/unable-to-fulfill.html"
)

type RoleAssignmentsCreate400ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     RoleAssignmentsCreate400ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsCreate401ApplicationJSONTypeEnum string

const (
	RoleAssignmentsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML RoleAssignmentsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	RoleAssignmentsCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    RoleAssignmentsCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type RoleAssignmentsCreate401ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     RoleAssignmentsCreate401ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsCreate403ApplicationJSONTypeEnum string

const (
	RoleAssignmentsCreate403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML RoleAssignmentsCreate403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type RoleAssignmentsCreate403ApplicationJSON struct {
	Detail   *string                                         `json:"detail"`
	Instance *string                                         `json:"instance"`
	Status   *interface{}                                    `json:"status"`
	Title    *interface{}                                    `json:"title"`
	Type     RoleAssignmentsCreate403ApplicationJSONTypeEnum `json:"type"`
}

type RoleAssignmentsCreateResponse struct {
	ContentType                                   string
	RoleAssignment                                *shared.RoleAssignment
	StatusCode                                    int64
	RoleAssignmentsCreate400ApplicationJSONObject *RoleAssignmentsCreate400ApplicationJSON
	RoleAssignmentsCreate401ApplicationJSONObject *RoleAssignmentsCreate401ApplicationJSON
	RoleAssignmentsCreate403ApplicationJSONObject *RoleAssignmentsCreate403ApplicationJSON
}
