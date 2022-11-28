import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1AdditionalTargetKeyName
/** 
 * Additional key names that will be used to identify the target of the policy value.
**/
export class GoogleChromePolicyVersionsV1AdditionalTargetKeyName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=keyDescription" })
  keyDescription?: string;
}
