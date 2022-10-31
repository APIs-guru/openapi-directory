package shared



type PermissionChange struct {
    AddedPermissions []Permission `json:"addedPermissions,omitempty"`
    RemovedPermissions []Permission `json:"removedPermissions,omitempty"`
    
}

