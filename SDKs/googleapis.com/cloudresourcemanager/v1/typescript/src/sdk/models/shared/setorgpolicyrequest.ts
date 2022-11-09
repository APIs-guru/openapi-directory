import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrgPolicy } from "./orgpolicy";


// SetOrgPolicyRequest
/** 
 * The request sent to the SetOrgPolicyRequest method.
**/
export class SetOrgPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: OrgPolicy;
}
