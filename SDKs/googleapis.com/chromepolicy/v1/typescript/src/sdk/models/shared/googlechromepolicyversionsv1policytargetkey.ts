import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1PolicyTargetKey
/** 
 * The key used to identify the target on which the policy will be applied.
**/
export class GoogleChromePolicyVersionsV1PolicyTargetKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalTargetKeys" })
  additionalTargetKeys?: Map<string, string>;

  @Metadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
