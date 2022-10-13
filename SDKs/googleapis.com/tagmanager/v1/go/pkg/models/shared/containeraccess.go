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

type ContainerAccess struct {
	ContainerID *string                         `json:"containerId"`
	Permission  []ContainerAccessPermissionEnum `json:"permission"`
}
