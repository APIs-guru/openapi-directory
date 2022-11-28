import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenancePolicy } from "./maintenancepolicy";
/**
 * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
**/
export declare class SetMaintenancePolicyRequest extends SpeakeasyBase {
    clusterId?: string;
    maintenancePolicy?: MaintenancePolicy;
    name?: string;
    projectId?: string;
    zone?: string;
}
