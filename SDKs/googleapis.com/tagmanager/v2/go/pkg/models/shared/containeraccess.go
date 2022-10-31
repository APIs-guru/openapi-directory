package shared




type ContainerAccessPermissionEnum string

const (
    ContainerAccessPermissionEnumContainerPermissionUnspecified ContainerAccessPermissionEnum = "containerPermissionUnspecified"
ContainerAccessPermissionEnumNoAccess ContainerAccessPermissionEnum = "noAccess"
ContainerAccessPermissionEnumRead ContainerAccessPermissionEnum = "read"
ContainerAccessPermissionEnumEdit ContainerAccessPermissionEnum = "edit"
ContainerAccessPermissionEnumApprove ContainerAccessPermissionEnum = "approve"
ContainerAccessPermissionEnumPublish ContainerAccessPermissionEnum = "publish"
)


type ContainerAccess struct {
    ContainerID *string `json:"containerId,omitempty"`
    Permission *ContainerAccessPermissionEnum `json:"permission,omitempty"`
    
}

