import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindow } from "./maintenancewindow";
/**
 * MaintenancePolicy defines the maintenance policy to be used for the cluster.
**/
export declare class MaintenancePolicy extends SpeakeasyBase {
    resourceVersion?: string;
    window?: MaintenanceWindow;
}
