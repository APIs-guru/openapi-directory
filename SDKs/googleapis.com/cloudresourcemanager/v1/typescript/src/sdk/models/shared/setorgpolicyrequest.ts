import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrgPolicy } from "./orgpolicy";



// SetOrgPolicyRequest
/** 
 * The request sent to the SetOrgPolicyRequest method.
**/
export class SetOrgPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: OrgPolicy;
}
