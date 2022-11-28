import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetEffectiveOrgPolicyRequest
/** 
 * The request sent to the GetEffectiveOrgPolicy method.
**/
export class GetEffectiveOrgPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraint" })
  constraint?: string;
}
