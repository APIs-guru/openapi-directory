import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIamV1GetPolicyOptions
/** 
 * Encapsulates settings provided to GetIamPolicy.
**/
export class GoogleIamV1GetPolicyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestedPolicyVersion" })
  requestedPolicyVersion?: number;
}
