import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceMeshControlPlaneManagement } from "./servicemeshcontrolplanemanagement";
import { ServiceMeshDataPlaneManagement } from "./servicemeshdataplanemanagement";
/**
 * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
**/
export declare class ServiceMeshMembershipState extends SpeakeasyBase {
    controlPlaneManagement?: ServiceMeshControlPlaneManagement;
    dataPlaneManagement?: ServiceMeshDataPlaneManagement;
}
