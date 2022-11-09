import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VmUtilizationMetrics } from "./vmutilizationmetrics";
import { VmwareVmDetails } from "./vmwarevmdetails";


// VmUtilizationInfo
/** 
 * Utilization information of a single VM.
**/
export class VmUtilizationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=utilization" })
  utilization?: VmUtilizationMetrics;

  @Metadata({ data: "json, name=vmId" })
  vmId?: string;

  @Metadata({ data: "json, name=vmwareVmDetails" })
  vmwareVmDetails?: VmwareVmDetails;
}
