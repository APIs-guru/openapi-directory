import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindow } from "./maintenancewindow";



// MaintenancePolicy
/** 
 * MaintenancePolicy defines the maintenance policy to be used for the cluster.
**/
export class MaintenancePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceVersion" })
  resourceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=window" })
  window?: MaintenanceWindow;
}
