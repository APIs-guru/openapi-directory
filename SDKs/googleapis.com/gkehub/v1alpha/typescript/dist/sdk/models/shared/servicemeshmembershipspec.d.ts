import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ServiceMeshMembershipSpecControlPlaneEnum {
    ControlPlaneManagementUnspecified = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}
export declare enum ServiceMeshMembershipSpecDefaultChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    Rapid = "RAPID",
    Regular = "REGULAR",
    Stable = "STABLE"
}
export declare enum ServiceMeshMembershipSpecManagementEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED",
    ManagementAutomatic = "MANAGEMENT_AUTOMATIC",
    ManagementManual = "MANAGEMENT_MANUAL"
}
/**
 * **Service Mesh**: Spec for a single Membership for the servicemesh feature
**/
export declare class ServiceMeshMembershipSpec extends SpeakeasyBase {
    controlPlane?: ServiceMeshMembershipSpecControlPlaneEnum;
    defaultChannel?: ServiceMeshMembershipSpecDefaultChannelEnum;
    management?: ServiceMeshMembershipSpecManagementEnum;
}
