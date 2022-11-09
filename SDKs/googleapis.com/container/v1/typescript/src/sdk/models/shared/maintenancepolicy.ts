import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenanceWindow } from "./maintenancewindow";


// MaintenancePolicy
/** 
 * MaintenancePolicy defines the maintenance policy to be used for the cluster.
**/
export class MaintenancePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceVersion" })
  resourceVersion?: string;

  @Metadata({ data: "json, name=window" })
  window?: MaintenanceWindow;
}
