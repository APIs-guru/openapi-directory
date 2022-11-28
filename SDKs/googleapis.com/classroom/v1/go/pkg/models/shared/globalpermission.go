package shared

type GlobalPermissionPermissionEnum string

const (
	GlobalPermissionPermissionEnumPermissionUnspecified GlobalPermissionPermissionEnum = "PERMISSION_UNSPECIFIED"
	GlobalPermissionPermissionEnumCreateCourse          GlobalPermissionPermissionEnum = "CREATE_COURSE"
)

// GlobalPermission
// Global user permission description.
type GlobalPermission struct {
	Permission *GlobalPermissionPermissionEnum `json:"permission,omitempty"`
}
