import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOrgPolicyRequest
/** 
 * The request sent to the GetOrgPolicy method.
**/
export class GetOrgPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraint" })
  constraint?: string;
}
