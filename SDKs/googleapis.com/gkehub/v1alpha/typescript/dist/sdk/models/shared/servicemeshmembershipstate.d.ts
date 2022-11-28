import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshAnalysisMessage } from "./servicemeshanalysismessage";
import { ServiceMeshControlPlaneManagement } from "./servicemeshcontrolplanemanagement";
import { ServiceMeshDataPlaneManagement } from "./servicemeshdataplanemanagement";
/**
 * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
**/
export declare class ServiceMeshMembershipState extends SpeakeasyBase {
    analysisMessages?: ServiceMeshAnalysisMessage[];
    configApiVersion?: string;
    controlPlaneManagement?: ServiceMeshControlPlaneManagement;
    dataPlaneManagement?: ServiceMeshDataPlaneManagement;
}
