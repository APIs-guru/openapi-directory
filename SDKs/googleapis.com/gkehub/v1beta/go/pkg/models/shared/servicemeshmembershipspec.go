package shared




type ServiceMeshMembershipSpecControlPlaneEnum string

const (
    ServiceMeshMembershipSpecControlPlaneEnumControlPlaneManagementUnspecified ServiceMeshMembershipSpecControlPlaneEnum = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED"
ServiceMeshMembershipSpecControlPlaneEnumAutomatic ServiceMeshMembershipSpecControlPlaneEnum = "AUTOMATIC"
ServiceMeshMembershipSpecControlPlaneEnumManual ServiceMeshMembershipSpecControlPlaneEnum = "MANUAL"
)



type ServiceMeshMembershipSpecManagementEnum string

const (
    ServiceMeshMembershipSpecManagementEnumManagementUnspecified ServiceMeshMembershipSpecManagementEnum = "MANAGEMENT_UNSPECIFIED"
ServiceMeshMembershipSpecManagementEnumManagementAutomatic ServiceMeshMembershipSpecManagementEnum = "MANAGEMENT_AUTOMATIC"
ServiceMeshMembershipSpecManagementEnumManagementManual ServiceMeshMembershipSpecManagementEnum = "MANAGEMENT_MANUAL"
)


type ServiceMeshMembershipSpec struct {
    ControlPlane *ServiceMeshMembershipSpecControlPlaneEnum `json:"controlPlane,omitempty"`
    Management *ServiceMeshMembershipSpecManagementEnum `json:"management,omitempty"`
    
}

