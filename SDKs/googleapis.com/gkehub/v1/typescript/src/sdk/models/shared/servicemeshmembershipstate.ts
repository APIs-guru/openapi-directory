import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceMeshControlPlaneManagement } from "./servicemeshcontrolplanemanagement";
import { ServiceMeshDataPlaneManagement } from "./servicemeshdataplanemanagement";


// ServiceMeshMembershipState
/** 
 * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
**/
export class ServiceMeshMembershipState extends SpeakeasyBase {
  @Metadata({ data: "json, name=controlPlaneManagement" })
  controlPlaneManagement?: ServiceMeshControlPlaneManagement;

  @Metadata({ data: "json, name=dataPlaneManagement" })
  dataPlaneManagement?: ServiceMeshDataPlaneManagement;
}
