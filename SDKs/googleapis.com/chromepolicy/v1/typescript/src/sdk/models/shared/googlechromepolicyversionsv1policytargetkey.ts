import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1PolicyTargetKey
/** 
 * The key used to identify the target on which the policy will be applied.
**/
export class GoogleChromePolicyVersionsV1PolicyTargetKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalTargetKeys" })
  additionalTargetKeys?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
