import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";



// GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest
/** 
 * Request message for updating the group priority ordering of an app.
**/
export class GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupIds" })
  groupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=policyNamespace" })
  policyNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
