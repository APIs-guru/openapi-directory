import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenancePolicy } from "./maintenancepolicy";



// SetMaintenancePolicyRequest
/** 
 * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
**/
export class SetMaintenancePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: MaintenancePolicy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
