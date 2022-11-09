import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyValue } from "./googlechromepolicyversionsv1policyvalue";


// GoogleChromePolicyVersionsV1ResolvedPolicy
/** 
 * The resolved value of a policy for a given target.
**/
export class GoogleChromePolicyVersionsV1ResolvedPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedSourceKey" })
  addedSourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

  @Metadata({ data: "json, name=sourceKey" })
  sourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

  @Metadata({ data: "json, name=targetKey" })
  targetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

  @Metadata({ data: "json, name=value" })
  value?: GoogleChromePolicyVersionsV1PolicyValue;
}
