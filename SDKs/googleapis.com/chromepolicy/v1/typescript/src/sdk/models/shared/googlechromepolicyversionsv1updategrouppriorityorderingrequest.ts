import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";


// GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest
/** 
 * Request message for updating the group priority ordering of an app.
**/
export class GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupIds" })
  groupIds?: string[];

  @Metadata({ data: "json, name=policyNamespace" })
  policyNamespace?: string;

  @Metadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
