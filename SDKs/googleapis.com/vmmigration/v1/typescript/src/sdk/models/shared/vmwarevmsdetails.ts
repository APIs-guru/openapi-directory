import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VmwareVmDetails } from "./vmwarevmdetails";



// VmwareVmsDetails
/** 
 * VmwareVmsDetails describes VMs in vCenter.
**/
export class VmwareVmsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: VmwareVmDetails })
  details?: VmwareVmDetails[];
}
