import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";



// GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse
/** 
 * Response message for listing the group priority ordering of an app.
**/
export class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupIds" })
  groupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=policyNamespace" })
  policyNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
