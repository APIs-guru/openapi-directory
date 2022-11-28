import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ServiceMeshMembershipSpecControlPlaneEnum {
    ControlPlaneManagementUnspecified = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}

export enum ServiceMeshMembershipSpecManagementEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED",
    ManagementAutomatic = "MANAGEMENT_AUTOMATIC",
    ManagementManual = "MANAGEMENT_MANUAL"
}


// ServiceMeshMembershipSpec
/** 
 * **Service Mesh**: Spec for a single Membership for the servicemesh feature
**/
export class ServiceMeshMembershipSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlPlane" })
  controlPlane?: ServiceMeshMembershipSpecControlPlaneEnum;

  @SpeakeasyMetadata({ data: "json, name=management" })
  management?: ServiceMeshMembershipSpecManagementEnum;
}
