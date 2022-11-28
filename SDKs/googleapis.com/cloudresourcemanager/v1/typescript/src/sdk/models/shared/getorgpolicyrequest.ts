import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOrgPolicyRequest
/** 
 * The request sent to the GetOrgPolicy method.
**/
export class GetOrgPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraint" })
  constraint?: string;
}
