import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ServiceMeshMembershipSpecControlPlaneEnum {
    ControlPlaneManagementUnspecified = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED"
,    Automatic = "AUTOMATIC"
,    Manual = "MANUAL"
}

export enum ServiceMeshMembershipSpecDefaultChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED"
,    Rapid = "RAPID"
,    Regular = "REGULAR"
,    Stable = "STABLE"
}

export enum ServiceMeshMembershipSpecManagementEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED"
,    ManagementAutomatic = "MANAGEMENT_AUTOMATIC"
,    ManagementManual = "MANAGEMENT_MANUAL"
}


// ServiceMeshMembershipSpec
/** 
 * **Service Mesh**: Spec for a single Membership for the servicemesh feature
**/
export class ServiceMeshMembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=controlPlane" })
  controlPlane?: ServiceMeshMembershipSpecControlPlaneEnum;

  @Metadata({ data: "json, name=defaultChannel" })
  defaultChannel?: ServiceMeshMembershipSpecDefaultChannelEnum;

  @Metadata({ data: "json, name=management" })
  management?: ServiceMeshMembershipSpecManagementEnum;
}
