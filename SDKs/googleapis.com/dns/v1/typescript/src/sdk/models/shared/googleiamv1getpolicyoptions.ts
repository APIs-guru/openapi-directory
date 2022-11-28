import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIamV1GetPolicyOptions
/** 
 * Encapsulates settings provided to GetIamPolicy.
**/
export class GoogleIamV1GetPolicyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestedPolicyVersion" })
  requestedPolicyVersion?: number;
}
