package shared

type ContainerAccessPermissionEnum string

const (
	ContainerAccessPermissionEnumRead          ContainerAccessPermissionEnum = "read"
	ContainerAccessPermissionEnumEdit          ContainerAccessPermissionEnum = "edit"
	ContainerAccessPermissionEnumPublish       ContainerAccessPermissionEnum = "publish"
	ContainerAccessPermissionEnumDelete        ContainerAccessPermissionEnum = "delete"
	ContainerAccessPermissionEnumManage        ContainerAccessPermissionEnum = "manage"
	ContainerAccessPermissionEnumEditWorkspace ContainerAccessPermissionEnum = "editWorkspace"
)

// ContainerAccess
// Defines the Google Tag Manager Container access permissions.
type ContainerAccess struct {
	ContainerID *string                         `json:"containerId,omitempty"`
	Permission  []ContainerAccessPermissionEnum `json:"permission,omitempty"`
}
