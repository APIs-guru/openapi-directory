import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenancePolicy } from "./maintenancepolicy";


// SetMaintenancePolicyRequest
/** 
 * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
**/
export class SetMaintenancePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: MaintenancePolicy;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
