import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfidentialInstanceConfig
/** 
 * Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs)
**/
export class ConfidentialInstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableConfidentialCompute" })
  enableConfidentialCompute?: boolean;
}
