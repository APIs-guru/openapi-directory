import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsVmDetails } from "./awsvmdetails";



// AwsVmsDetails
/** 
 * AWSVmsDetails describes VMs in AWS.
**/
export class AwsVmsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: AwsVmDetails })
  details?: AwsVmDetails[];
}
