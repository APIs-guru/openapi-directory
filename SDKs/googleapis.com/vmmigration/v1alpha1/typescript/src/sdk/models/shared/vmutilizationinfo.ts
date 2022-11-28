import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VmUtilizationMetrics } from "./vmutilizationmetrics";
import { VmwareVmDetails } from "./vmwarevmdetails";
import { VmwareVmDetailsInput } from "./vmwarevmdetails";



// VmUtilizationInfo
/** 
 * Utilization information of a single VM.
**/
export class VmUtilizationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=utilization" })
  utilization?: VmUtilizationMetrics;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;

  @SpeakeasyMetadata({ data: "json, name=vmwareVmDetails" })
  vmwareVmDetails?: VmwareVmDetails;
}


// VmUtilizationInfoInput
/** 
 * Utilization information of a single VM.
**/
export class VmUtilizationInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=utilization" })
  utilization?: VmUtilizationMetrics;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;

  @SpeakeasyMetadata({ data: "json, name=vmwareVmDetails" })
  vmwareVmDetails?: VmwareVmDetailsInput;
}
