import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfidentialInstanceConfig
/** 
 * Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs)
**/
export class ConfidentialInstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableConfidentialCompute" })
  enableConfidentialCompute?: boolean;
}
