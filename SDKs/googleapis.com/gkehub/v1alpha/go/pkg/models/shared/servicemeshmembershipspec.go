package shared

type ServiceMeshMembershipSpecControlPlaneEnum string

const (
	ServiceMeshMembershipSpecControlPlaneEnumControlPlaneManagementUnspecified ServiceMeshMembershipSpecControlPlaneEnum = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED"
	ServiceMeshMembershipSpecControlPlaneEnumAutomatic                         ServiceMeshMembershipSpecControlPlaneEnum = "AUTOMATIC"
	ServiceMeshMembershipSpecControlPlaneEnumManual                            ServiceMeshMembershipSpecControlPlaneEnum = "MANUAL"
)

type ServiceMeshMembershipSpecDefaultChannelEnum string

const (
	ServiceMeshMembershipSpecDefaultChannelEnumChannelUnspecified ServiceMeshMembershipSpecDefaultChannelEnum = "CHANNEL_UNSPECIFIED"
	ServiceMeshMembershipSpecDefaultChannelEnumRapid              ServiceMeshMembershipSpecDefaultChannelEnum = "RAPID"
	ServiceMeshMembershipSpecDefaultChannelEnumRegular            ServiceMeshMembershipSpecDefaultChannelEnum = "REGULAR"
	ServiceMeshMembershipSpecDefaultChannelEnumStable             ServiceMeshMembershipSpecDefaultChannelEnum = "STABLE"
)

type ServiceMeshMembershipSpecManagementEnum string

const (
	ServiceMeshMembershipSpecManagementEnumManagementUnspecified ServiceMeshMembershipSpecManagementEnum = "MANAGEMENT_UNSPECIFIED"
	ServiceMeshMembershipSpecManagementEnumManagementAutomatic   ServiceMeshMembershipSpecManagementEnum = "MANAGEMENT_AUTOMATIC"
	ServiceMeshMembershipSpecManagementEnumManagementManual      ServiceMeshMembershipSpecManagementEnum = "MANAGEMENT_MANUAL"
)

// ServiceMeshMembershipSpec
// **Service Mesh**: Spec for a single Membership for the servicemesh feature
type ServiceMeshMembershipSpec struct {
	ControlPlane   *ServiceMeshMembershipSpecControlPlaneEnum   `json:"controlPlane,omitempty"`
	DefaultChannel *ServiceMeshMembershipSpecDefaultChannelEnum `json:"defaultChannel,omitempty"`
	Management     *ServiceMeshMembershipSpecManagementEnum     `json:"management,omitempty"`
}
