import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";


// GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse
/** 
 * Response message for listing the group priority ordering of an app.
**/
export class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupIds" })
  groupIds?: string[];

  @Metadata({ data: "json, name=policyNamespace" })
  policyNamespace?: string;

  @Metadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
