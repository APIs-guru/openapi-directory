import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VmwareVmDetails } from "./vmwarevmdetails";


// VmwareVmsDetails
/** 
 * VmwareVmsDetails describes VMs in vCenter.
**/
export class VmwareVmsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=details", elemType: shared.VmwareVmDetails })
  details?: VmwareVmDetails[];
}
