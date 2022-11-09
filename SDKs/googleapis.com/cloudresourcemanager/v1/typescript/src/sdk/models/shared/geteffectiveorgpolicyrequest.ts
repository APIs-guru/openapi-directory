import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetEffectiveOrgPolicyRequest
/** 
 * The request sent to the GetEffectiveOrgPolicy method.
**/
export class GetEffectiveOrgPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraint" })
  constraint?: string;
}
