import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPolicyOptions
/** 
 * Encapsulates settings provided to GetIamPolicy.
**/
export class GetPolicyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestedPolicyVersion" })
  requestedPolicyVersion?: number;
}
