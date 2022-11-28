package shared

type AuthorizationLoggingOptionsPermissionTypeEnum string

const (
	AuthorizationLoggingOptionsPermissionTypeEnumPermissionTypeUnspecified AuthorizationLoggingOptionsPermissionTypeEnum = "PERMISSION_TYPE_UNSPECIFIED"
	AuthorizationLoggingOptionsPermissionTypeEnumAdminRead                 AuthorizationLoggingOptionsPermissionTypeEnum = "ADMIN_READ"
	AuthorizationLoggingOptionsPermissionTypeEnumAdminWrite                AuthorizationLoggingOptionsPermissionTypeEnum = "ADMIN_WRITE"
	AuthorizationLoggingOptionsPermissionTypeEnumDataRead                  AuthorizationLoggingOptionsPermissionTypeEnum = "DATA_READ"
	AuthorizationLoggingOptionsPermissionTypeEnumDataWrite                 AuthorizationLoggingOptionsPermissionTypeEnum = "DATA_WRITE"
)

// AuthorizationLoggingOptions
// Authorization-related information used by Cloud Audit Logging.
type AuthorizationLoggingOptions struct {
	PermissionType *AuthorizationLoggingOptionsPermissionTypeEnum `json:"permissionType,omitempty"`
}
