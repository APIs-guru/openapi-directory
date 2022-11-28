import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshAnalysisMessage } from "./servicemeshanalysismessage";
import { ServiceMeshControlPlaneManagement } from "./servicemeshcontrolplanemanagement";
import { ServiceMeshDataPlaneManagement } from "./servicemeshdataplanemanagement";



// ServiceMeshMembershipState
/** 
 * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
**/
export class ServiceMeshMembershipState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisMessages", elemType: ServiceMeshAnalysisMessage })
  analysisMessages?: ServiceMeshAnalysisMessage[];

  @SpeakeasyMetadata({ data: "json, name=configApiVersion" })
  configApiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=controlPlaneManagement" })
  controlPlaneManagement?: ServiceMeshControlPlaneManagement;

  @SpeakeasyMetadata({ data: "json, name=dataPlaneManagement" })
  dataPlaneManagement?: ServiceMeshDataPlaneManagement;
}
